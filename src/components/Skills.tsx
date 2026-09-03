import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="border-t border-white/10">
      <SectionHeading
        label="Technical Competencies"
        title="Skills & Core Disciplines"
        description="Structured overview of technical proficiencies, cloud infrastructure, and analytical capabilities."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-card p-6 min-w-0"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <h3 className="label-text text-emerald-400 font-semibold tracking-wider">
                {skillGroup.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 text-xs sm:text-sm font-mono hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
