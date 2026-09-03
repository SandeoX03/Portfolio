import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { projects } from "../data/portfolio";

function hasRealLink(link: string) {
  return Boolean(link) && link !== "#";
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="border-t border-[var(--color-line)]">
      <SectionHeading
        label="Work"
        title="Selected projects"
        description="Labs, challenges, and student work I've actually spent time on."
      />

      <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 min-w-0"
          >
            <div className="md:col-span-5 min-w-0">
              <div className="aspect-[16/10] w-full border border-[var(--color-line)] bg-[var(--color-bg-alt)] flex items-end p-5 sm:p-6">
                <span className="font-serif text-4xl md:text-5xl text-[var(--color-ink)]/20 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-serif text-xl md:text-2xl text-[var(--color-ink)] leading-snug">
                  {project.title}
                </h3>
                <span className="badge-pending shrink-0">{project.status}</span>
              </div>

              <p className="text-[var(--color-ink-2)] text-[0.9375rem] leading-relaxed mb-5">
                {project.description}
              </p>

              <p className="tag mb-6">
                {project.tags.join(" · ")}
              </p>

              {hasRealLink(project.link) && (
                <a
                  href={project.link}
                  className="text-link text-sm w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
