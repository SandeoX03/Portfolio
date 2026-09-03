import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education" className="border-t border-white/10">
      <SectionHeading label="Education" title="Academic Qualification" />

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <motion.article
            key={edu.institution}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-card p-6 sm:p-8 min-w-0"
          >
            <div className="grid md:grid-cols-12 gap-6 min-w-0">
              <div className="md:col-span-4 min-w-0">
                <span className="inline-block font-mono text-xs font-semibold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {edu.period}
                </span>
              </div>
              <div className="md:col-span-8 min-w-0">
                <h3 className="text-xl font-bold text-white tracking-tight">{edu.institution}</h3>
                <p className="text-sm font-mono text-emerald-400 mt-1 mb-3">{edu.degree}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{edu.details}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
