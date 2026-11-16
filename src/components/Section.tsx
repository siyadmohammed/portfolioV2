import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Two-digit position shown above the title, e.g. "01". */
  index: string;
  title: string;
  children: ReactNode;
};

/** Editorial section: numbered title in a sticky left column, content in the right. */
export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-line pt-10"
    >
      <div className="grid gap-10 md:grid-cols-12">
        <header className="self-start md:sticky md:top-24 md:col-span-4">
          <p className="font-mono text-xs tracking-widest text-accent">
            {index}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-3 font-display text-4xl leading-none font-semibold tracking-[-0.035em] md:text-5xl"
          >
            {title}
          </h2>
        </header>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
