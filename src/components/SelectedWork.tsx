import { projects } from "@/content";
import { MagicCard } from "./MagicCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { StackList } from "./StackList";

export function SelectedWork() {
  return (
    <Section id="work" index="02" title="Selected work">
      <ol className="flex flex-col gap-6">
        {projects.map((project, index) => {
          const live = project.links?.live;
          const meta = project.context ?? (live && new URL(live).host);
          return (
            <li key={project.slug} id={project.slug} className="scroll-mt-24">
              <Reveal>
                <MagicCard
                  className="rounded-2xl"
                  gradientSize={260}
                  gradientFrom="var(--accent)"
                  gradientTo="var(--muted)"
                  gradientColor="color-mix(in srgb, var(--accent) 10%, transparent)"
                  gradientOpacity={1}
                >
                  <div className="grid gap-4 p-6 sm:grid-cols-[3rem_1fr] md:p-8">
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
                  </div>
                </MagicCard>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
