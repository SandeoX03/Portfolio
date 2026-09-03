import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { aboutContent, honors } from "../data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about" className="border-t border-[var(--color-line)]">
      <SectionHeading label="About" title="A bit about me" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 min-w-0">
        <div className="lg:col-span-7 space-y-5 min-w-0">
          <p className="text-[var(--color-ink)] text-lg leading-relaxed font-serif">
            {aboutContent.intro}
          </p>

          {aboutContent.story.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="text-[var(--color-ink-2)] leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="lg:col-span-5 min-w-0">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 mb-12">
            {aboutContent.highlights.map((item) => (
              <div key={item.label}>
                <dt className="label-text mb-1">{item.label}</dt>
                <dd className="font-serif text-lg text-[var(--color-ink)]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className="label-text mb-4">Honors</p>
          <ul className="space-y-3">
            {honors.map((honor) => (
              <li
                key={honor}
                className="text-sm text-[var(--color-ink-2)] leading-relaxed pl-3 border-l border-[var(--color-line)]"
              >
                {honor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
