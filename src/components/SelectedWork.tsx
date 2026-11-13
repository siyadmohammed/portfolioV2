import { projects } from "@/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { StackList } from "./StackList";

export function SelectedWork() {
  return (
    <Section id="work" index="02" title="Selected work">
      <ol className="border-b border-line">
        {projects.map((project, index) => {
          const live = project.links?.live;
          const meta = project.context ?? (live && new URL(live).host);
          return (
            <li
              key={project.slug}
              id={project.slug}
              className="scroll-mt-24 border-t border-line py-10"
            >
              <Reveal className="grid gap-4 sm:grid-cols-[3rem_1fr]">
                <span className="pt-2 font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-serif text-4xl leading-none tracking-tight md:text-5xl">
                      {live ? (
                        <a
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-baseline gap-2 transition-colors hover:text-accent"
                        >
                          {project.title}
                          <span
                            aria-hidden
                            className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          >
                            ↗
                          </span>
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    {meta && (
                      <p className="font-mono text-xs tracking-wide text-muted uppercase">
                        {meta}
                      </p>
                    )}
                  </div>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5">
                    <StackList items={project.stack} />
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
