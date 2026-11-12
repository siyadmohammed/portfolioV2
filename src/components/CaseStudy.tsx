import type { Project } from "@/content";
import type { ReactNode } from "react";
import { FlowPipeline } from "./FlowPipeline";
import { Reveal } from "./Reveal";
import { StackList } from "./StackList";

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
      <dt className="pt-1 font-mono text-xs tracking-wide text-muted uppercase">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}

type CaseStudyProps = {
  project: Project;
  /** Letter shown beside the title, e.g. "A". */
  marker: string;
};

export function CaseStudy({ project, marker }: CaseStudyProps) {
  return (
    <article id={project.slug} className="scroll-mt-24">
      <Reveal>
        <header className="flex items-start gap-5">
          <span
            aria-hidden
            className="font-serif text-5xl leading-none text-accent italic md:text-6xl"
          >
            {marker}
          </span>
          <div>
            <h3 className="font-serif text-4xl leading-none tracking-tight md:text-5xl">
              {project.title}
            </h3>
            <p className="mt-3 font-mono text-xs tracking-wide text-muted uppercase">
              {project.summary}
              {project.context && ` · ${project.context}`}
            </p>
          </div>
        </header>
      </Reveal>

      <Reveal>
        <dl className="mt-10 flex flex-col gap-8 leading-relaxed">
          <Row label="Problem">
            <p className="text-lg">{project.problem}</p>
          </Row>

          {project.flow && (
            <Row label="Flow">
              <FlowPipeline steps={project.flow} />
            </Row>
          )}

          <Row label={project.contributionsLabel}>
            <ol className="flex flex-col gap-3">
              {project.contributions.map((item, index) => (
                <li key={item} className="grid grid-cols-[2rem_1fr]">
                  <span className="pt-0.5 font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            {project.teamNote && (
              <p className="mt-4 border-l-2 border-line pl-4 text-sm text-muted">
                {project.teamNote}
              </p>
            )}
          </Row>

          {project.testedCombinations && (
            <Row label="Tested">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {project.testedCombinations.map((dimension, index) => (
                  <span key={dimension} className="flex items-center gap-3">
                    {index > 0 && (
                      <span aria-hidden className="font-serif text-2xl text-accent">
                        ×
                      </span>
                    )}
                    <span className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm font-medium">
                      {dimension}
                    </span>
                  </span>
                ))}
              </p>
              <p className="mt-2 text-sm text-muted">Every combination.</p>
            </Row>
          )}

          {project.outcome && (
            <Row label="Outcome">
              <p>{project.outcome}</p>
            </Row>
          )}

          <Row label="Stack">
            <StackList items={project.stack} />
          </Row>
        </dl>
      </Reveal>

      <Reveal>
        <figure className="mt-10 rounded-2xl border border-line bg-surface px-6 py-8 md:px-10 md:py-10">
          <blockquote className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            <span className="text-accent">“</span>
            {project.lesson}
            <span className="text-accent">”</span>
          </blockquote>
          <figcaption className="mt-4 font-mono text-xs tracking-wide text-muted uppercase">
            Lesson
          </figcaption>
        </figure>
      </Reveal>
    </article>
  );
}
