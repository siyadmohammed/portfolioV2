import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dark palette from globals.css; the card has no light variant.
const PAPER = "#0b0d0c";
const INK = "#e8ece6";
const MUTED = "#8a938c";
const LINE = "#232825";
const ACCENT = "#c5f82a";

const FONT_TIMEOUT_MS = 10_000;

/**
 * Downloads a TrueType subset of a Google Font containing only `text`.
 * Returns null on any failure so the card still renders in the default font.
 * Cached because a network read at module scope stalls the build's prerender.
 */
async function loadGoogleFont(
  family: string,
  text: string,
): Promise<ArrayBuffer | null> {
  "use cache";
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;
    const cssResponse = await fetch(cssUrl, {
      signal: AbortSignal.timeout(FONT_TIMEOUT_MS),
    });
    if (!cssResponse.ok) {
      throw new Error(`stylesheet request returned ${cssResponse.status}`);
    }
    const css = await cssResponse.text();
    const fontUrl = css.match(
      /src: url\((.+?)\) format\('(?:truetype|opentype)'\)/,
    )?.[1];
    if (!fontUrl) throw new Error("no TrueType source in stylesheet");

    const fontResponse = await fetch(fontUrl, {
      signal: AbortSignal.timeout(FONT_TIMEOUT_MS),
    });
    if (!fontResponse.ok) {
      throw new Error(`font request returned ${fontResponse.status}`);
    }
    return await fontResponse.arrayBuffer();
  } catch (error) {
    console.warn(
      `[opengraph-image] ${family} unavailable, using the default font:`,
      error,
    );
    return null;
  }
}

const host = new URL(profile.siteUrl).host;
const sansText = [profile.headline, profile.availability, host].join(" ");

const portrait = await readFile(
  join(process.cwd(), "public/portrait.jpg"),
  "base64",
);

export default async function Image() {
  const [display, sans, mono] = await Promise.all([
    loadGoogleFont("Bricolage+Grotesque:wght@600", profile.name),
    loadGoogleFont("Geist:wght@400", sansText),
    loadGoogleFont("Geist+Mono", profile.role.toUpperCase()),
  ]);
  const fonts = [
    display && { name: "Bricolage Grotesque", data: display, weight: 600 as const },
    sans && { name: "Geist", data: sans, weight: 400 as const },
    mono && { name: "Geist Mono", data: mono, weight: 400 as const },
  ].filter((font) => font !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: PAPER,
          color: INK,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            maxWidth: 660,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Geist Mono",
                fontSize: 22,
                letterSpacing: 2,
                color: ACCENT,
              }}
            >
              {profile.role.toUpperCase()}
            </div>
            <div
              style={{
                marginTop: 20,
                fontFamily: "Bricolage Grotesque",
                fontSize: 62,
                whiteSpace: "nowrap",
                lineHeight: 1,
                letterSpacing: -1.5,
              }}
            >
              {profile.name}
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 30,
                lineHeight: 1.35,
                color: MUTED,
              }}
            >
              {profile.headline}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `1px solid ${LINE}`,
              paddingTop: 22,
              fontSize: 22,
              color: MUTED,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 12,
                  background: ACCENT,
                  marginRight: 12,
                }}
              />
              {profile.availability}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src={`data:image/jpeg;base64,${portrait}`}
            width={330}
            height={330}
            alt=""
            style={{ borderRadius: 24, border: `1px solid ${LINE}` }}
          />
          <div style={{ marginTop: 20, fontSize: 22, color: MUTED }}>{host}</div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
