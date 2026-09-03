import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="border-t border-[var(--color-line)]">
      <SectionHeading label="Experience" title="Where I've worked" />

      <div className="space-y-12">
        {experience.map((job) => (
          <article
            key={job.company}
            className="grid md:grid-cols-12 gap-4 md:gap-8 min-w-0"
          >
            <div className="md:col-span-4">
              <p className="font-mono text-xs text-[var(--color-ink-3)] mb-1">
                {job.period}
              </p>
              <p className="text-sm text-[var(--color-ink-3)]">{job.duration}</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="font-serif text-xl text-[var(--color-ink)]">{job.role}</h3>
              <p className="text-sm text-[var(--color-ink-2)] mt-1 mb-5">{job.company}</p>
              <ul className="space-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm text-[var(--color-ink-2)] leading-relaxed"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
