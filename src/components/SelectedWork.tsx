import { projects } from "@/content";
import { AiPractices } from "./AiPractices";
import { CaseStudy } from "./CaseStudy";
import { Section } from "./Section";

export function SelectedWork() {
  return (
    <Section id="work" index="02" title="Selected work">
      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <CaseStudy
            key={project.slug}
            project={project}
            marker={String.fromCharCode(65 + index)}
          />
        ))}
        <AiPractices />
      </div>
    </Section>
  );
}
