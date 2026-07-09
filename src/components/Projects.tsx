import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="section-alt">
      <SectionHeading
        label="Projects"
        title="Things I've built & explored"
        description="From cloud infrastructure labs to cybersecurity challenges — hands-on work that sharpens my skills and deepens my understanding."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card p-6 flex flex-col group"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-[#0f172a] group-hover:text-[#1e40af] transition-colors">
                {project.title}
              </h3>
              <span
                className={
                  project.status === "Completed" ? "badge-success" : "badge-pending"
                }
              >
                {project.status}
              </span>
            </div>

            <p className="text-[#475569] text-sm leading-relaxed mb-5 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag !text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#64748b] hover:text-[#1e40af] transition-colors mt-auto"
            >
              View details <HiExternalLink size={14} />
            </a>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
