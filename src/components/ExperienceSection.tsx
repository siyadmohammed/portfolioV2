import {
  formatDateRange,
  formatEducationYears,
  getExperience,
  profile,
} from "@/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { StackList } from "./StackList";
import { Timeline } from "./Timeline";

export function ExperienceSection() {
  const { education } = profile;

  return (
    <Section id="experience" index="01" title="Experience">
      <Timeline>
        {getExperience().map((job) => {
          const current = job.period.end === "present";
          return (
            <li key={job.id} className="relative pl-9">
              <span
                aria-hidden
                className={`absolute top-1.5 left-0 size-[11px] rounded-full border-2 border-accent ${
                  current ? "bg-accent" : "bg-paper"
                }`}
              />
              <Reveal>
                <p className="font-mono text-xs tracking-wide text-muted uppercase">
                  {formatDateRange(job.period)}
                  {job.employmentNote && ` · ${job.employmentNote}`}
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-tight">
                  {job.title}
                </h3>
                <p className="mt-1 font-serif text-2xl text-muted italic">
                  {job.company}
                </p>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
                <ul className="mt-5 flex flex-col gap-2.5 leading-relaxed">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 before:absolute before:left-0 before:text-accent before:content-['–']"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <StackList items={job.stack} />
                </div>
              </Reveal>
            </li>
          );
        })}
      </Timeline>

      <Reveal className="mt-16 border-t border-line pt-6">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">
          Education · {formatEducationYears(education)}
        </p>
        <p className="mt-2 text-lg">
          {education.degree},{" "}
          <span className="font-serif text-xl italic">
            {education.institution}
          </span>
          , {education.location}
        </p>
      </Reveal>
    </Section>
  );
}
