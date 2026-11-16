import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Reveal } from "./Reveal";
import { SplitWords } from "./SplitWords";

// The server HTML is what a visitor sees before JavaScript loads, and what
// crawlers read. Nothing in it may be hidden by an animation's start state.
describe("content is visible in the server HTML", () => {
  it("Reveal renders its children without hiding styles", () => {
    const html = renderToStaticMarkup(
      <Reveal>
        <p>Experience entry</p>
      </Reveal>,
    );
    expect(html).toContain("Experience entry");
    expect(html).not.toMatch(/opacity:\s*0|transform/);
  });

  it("SplitWords keeps every word in the markup without inline hiding", () => {
    const html = renderToStaticMarkup(<SplitWords text="Mohammed Siyad M A" />);
    for (const word of ["Mohammed", "Siyad", "M", "A"]) {
      expect(html).toContain(`>${word}<`);
    }
    expect(html).not.toMatch(/opacity:\s*0|translateY/);
  });

  it("SplitWords keeps the spaces between the visible words", () => {
    const html = renderToStaticMarkup(<SplitWords text="Mohammed Siyad M A" />);
    const visible = html
      .replace(/<span class="sr-only">.*?<\/span>/, "")
      .replace(/<[^>]+>/g, "");
    expect(visible).toBe("Mohammed Siyad M A");
  });
});
