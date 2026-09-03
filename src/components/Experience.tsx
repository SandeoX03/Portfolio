import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { experience, volunteering } from "../data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="border-t border-white/10">
      <SectionHeading label="Experience & Service" title="Leadership & Practical Roles" />

      <div className="space-y-6">
        {experience.map((job, idx) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-card p-6 sm:p-8 min-w-0"
          >
            <div className="grid md:grid-cols-12 gap-6 min-w-0">
              <div className="md:col-span-4 min-w-0">
                <span className="inline-block font-mono text-xs font-semibold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 mb-2">
                  {job.period}
                </span>
                <p className="text-xs font-mono text-slate-400">{job.duration}</p>
              </div>

              <div className="md:col-span-8 min-w-0">
                <h3 className="text-xl font-bold text-white tracking-tight">{job.role}</h3>
                <p className="text-sm font-medium text-emerald-400/90 mt-1 mb-4">{job.company}</p>
                <ul className="space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-emerald-400 font-mono text-xs mt-0.5">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}

        {volunteering && volunteering.length > 0 && (
          <div className="pt-6">
            <h3 className="label-text mb-4 text-emerald-400">Volunteering & Community Service</h3>
            <div className="space-y-4">
              {volunteering.map((vol, idx) => (
                <motion.div
                  key={vol.organization}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-card p-6 sm:p-8 min-w-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono font-semibold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                        {vol.role}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight mt-2">
                        {vol.organization}
                      </h4>
                    </div>
                    <span className="glass-pill text-xs">{vol.category}</span>
                  </div>

                  <div className="space-y-3 mt-4 pt-3 border-t border-white/10">
                    {vol.events.map((event) => (
                      <div key={event.title} className="text-xs sm:text-sm text-slate-300">
                        <span className="font-semibold text-white block mb-0.5">
                          ✦ {event.title}
                        </span>
                        <p className="text-slate-400 leading-relaxed pl-4">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
