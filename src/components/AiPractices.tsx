import { aiPractices } from "@/content";
import { Reveal } from "./Reveal";

export function AiPractices() {
  return (
    <Reveal className="rounded-2xl border border-line p-6 md:p-10">
      <h3 className="font-serif text-3xl tracking-tight md:text-4xl">
        How I build with <span className="text-accent italic">AI</span>
      </h3>
      <ol className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {aiPractices.map((practice, index) => (
          <li key={practice} className="border-t border-line pt-4">
            <span className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 leading-relaxed">{practice}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
