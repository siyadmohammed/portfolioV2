import { profile } from "@/content";
import { LocalTime } from "./LocalTime";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function ContactSection() {
  return (
    <Section id="contact" index="03" title="Contact">
      <Reveal>
        <p className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {profile.contactNote}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="link-draw mt-12 inline-block text-[clamp(1.1rem,3.6vw,2.5rem)] font-medium tracking-tight break-all text-accent"
        >
          {profile.email}
        </a>
        {profile.links.length > 0 && (
          <p className="mt-6 flex flex-wrap gap-6">
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw text-lg"
              >
                {link.label} ↗
              </a>
            ))}
          </p>
        )}
      </Reveal>

      <footer className="mt-24 flex flex-wrap justify-between gap-4 border-t border-line pt-6 font-mono text-xs text-muted uppercase">
        <span>{profile.name}</span>
        <span>
          {profile.location} · <LocalTime timeZone={profile.timeZone} />
        </span>
      </footer>
    </Section>
  );
}
