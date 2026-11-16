import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { profile } from "@/content";
import DecryptedText from "./DecryptedText";
import { LocalTime } from "./LocalTime";
import { Reveal } from "./Reveal";
import { ShimmerButton } from "./ShimmerButton";
import { SplitWords } from "./SplitWords";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate pt-16 pb-24 md:pt-24 md:pb-32"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute -inset-x-5 inset-y-0 -z-10 sm:-inset-x-8"
      />
      <p className="flex items-center gap-2.5 font-mono text-xs tracking-wide text-muted uppercase">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        {profile.availability}
      </p>

      <h1 className="mt-8 font-serif text-[clamp(3.25rem,11vw,9rem)] leading-[0.92] tracking-[-0.02em]">
        <SplitWords text={profile.name} />
      </h1>

      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <Reveal delay={0.4} className="md:col-span-7">
          <p className="text-2xl leading-snug tracking-tight md:text-[1.75rem]">
            <span className="text-accent">
              <DecryptedText
                text={`${profile.role}.`}
                animateOn="view"
                sequential
                speed={45}
                useOriginalCharsOnly
              />
            </span>{" "}
            {profile.headline}
          </p>
          {profile.bio.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 max-w-xl leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-medium">
            <ShimmerButton
              href={`mailto:${profile.email}`}
              background="var(--accent)"
              shimmerColor="#ffffff"
              className="gap-2 border-transparent px-5 py-3 text-accent-ink"
            >
              <Mail aria-hidden className="size-4" />
              Email me
            </ShimmerButton>
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-3 transition-colors hover:border-ink"
              >
                {link.label}
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-3 transition-colors hover:border-ink"
              >
                <FileText aria-hidden className="size-4" />
                Resume
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.55} className="md:col-span-4 md:col-start-9">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 font-mono text-xs md:grid-cols-1">
            <div className="col-span-2 md:col-span-1">
              <dt className="tracking-wide text-muted uppercase">Currently</dt>
              <dd className="mt-1.5 font-sans text-sm leading-relaxed text-ink">
                {profile.current}
              </dd>
            </div>
            <div>
              <dt className="tracking-wide text-muted uppercase">Based in</dt>
              <dd className="mt-1.5 text-sm text-ink">{profile.location}</dd>
            </div>
            <div>
              <dt className="tracking-wide text-muted uppercase">Local time</dt>
              <dd className="mt-1.5 text-sm text-ink">
                <LocalTime timeZone={profile.timeZone} />
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
