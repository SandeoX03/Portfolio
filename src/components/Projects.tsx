import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { projects, capstoneProject } from "../data/portfolio";

function hasRealLink(link: string) {
  return Boolean(link) && link !== "#";
}

export default function Projects() {
  const secondaryProjects = projects.filter((p) => !p.isCapstone);

  return (
    <SectionWrapper id="projects" className="border-t border-white/10">
      <SectionHeading
        label="Featured Work & Projects"
        title="Engineering Showcase"
        description="Capstone case studies, cloud infrastructure labs, and cybersecurity challenges."
      />

      {/* Capstone Featured Showcase */}
      {capstoneProject && (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 relative overflow-hidden group"
        >
          {/* Subtle accent glow spot inside capstone card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          {/* Top Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold tracking-wider uppercase">
                Capstone Project
              </span>
              <span className="text-slate-500 text-xs font-mono">Taylor's University</span>
            </div>
            <span className="badge-success font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {capstoneProject.status}
            </span>
          </div>

          {/* Project Title & Subtitle */}
          <div className="max-w-3xl mb-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2">
              {capstoneProject.title}
            </h3>
            <p className="text-emerald-400 font-mono text-sm sm:text-base mb-4 font-medium">
              {capstoneProject.subtitle}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {capstoneProject.description}
            </p>
          </div>

          {/* Contribution Breakdown Grid */}
          <div className="grid md:grid-cols-2 gap-6 my-8 pt-6 border-t border-white/10">
            {/* Team Scope */}
            <div className="bg-slate-900/40 rounded-xl p-5 border border-white/5 backdrop-blur-sm">
              <h4 className="label-text mb-3 text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Overall Group Project Scope
              </h4>
              <ul className="space-y-2">
                {capstoneProject.teamScope?.map((item) => (
                  <li key={item} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                    <span className="text-cyan-400 font-mono">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Individual Contribution */}
            <div className="bg-emerald-950/20 rounded-xl p-5 border border-emerald-500/20 backdrop-blur-sm">
              <h4 className="label-text mb-3 text-emerald-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                My Individual Engineering & Security Responsibilities
              </h4>
              <ul className="space-y-2">
                {capstoneProject.individualContributions?.map((item) => (
                  <li key={item} className="text-xs sm:text-sm text-emerald-100 font-medium flex items-center gap-2">
                    <span className="text-emerald-400 font-mono">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tags Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {capstoneProject.tags.map((tag) => (
                <span key={tag} className="glass-pill">
                  {tag}
                </span>
              ))}
            </div>
            {hasRealLink(capstoneProject.link) && (
              <a
                href={capstoneProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                View Repository ↗
              </a>
            )}
          </div>
        </motion.article>
      )}

      {/* Secondary Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {secondaryProjects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-semibold text-emerald-400/80 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <span className="badge-pending text-xs">{project.status}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="glass-pill text-[0.68rem]">
                    {tag}
                  </span>
                ))}
              </div>

              {hasRealLink(project.link) && (
                <a
                  href={project.link}
                  className="text-link text-xs font-mono font-medium inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
