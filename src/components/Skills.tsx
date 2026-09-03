import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="border-t border-[var(--color-line)]">
      <SectionHeading
        label="Skills"
        title="What I work with"
      />

      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {skills.map((skill) => (
          <div key={skill.category} className="min-w-0">
            <h3 className="label-text mb-3">{skill.category}</h3>
            <ul className="space-y-1.5">
              {skill.items.map((item) => (
                <li key={item} className="text-[var(--color-ink)] text-[0.9375rem]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
