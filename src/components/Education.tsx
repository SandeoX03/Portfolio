import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education" className="border-t border-[var(--color-line)]">
      <SectionHeading label="Education" title="Studies" />

      <div className="space-y-10">
        {education.map((edu) => (
          <article
            key={edu.institution}
            className="grid md:grid-cols-12 gap-4 md:gap-8 min-w-0"
          >
            <div className="md:col-span-4">
              <p className="font-mono text-xs text-[var(--color-ink-3)]">{edu.period}</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="font-serif text-xl text-[var(--color-ink)]">{edu.institution}</h3>
              <p className="text-sm text-[var(--color-ink-2)] mt-1 mb-3">{edu.degree}</p>
              <p className="text-sm text-[var(--color-ink-2)] leading-relaxed">{edu.details}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
