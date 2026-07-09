import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="Experience"
        title="Where I've made an impact"
        description="Professional and leadership experiences that shaped my communication skills, work ethic, and passion for technology."
      />

      <div className="relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[#e2e8f0]" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-16 md:pl-20"
            >
              <div className="absolute left-3 md:left-5 top-1 h-7 w-7 rounded-full bg-white border-2 border-[#1e40af] flex items-center justify-center shadow-sm">
                <HiBriefcase className="text-[#1e40af]" size={12} />
              </div>

              <div className="card p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0f172a]">{job.role}</h3>
                    <p className="text-[#1e40af] text-sm mt-1 font-medium">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm text-[#475569] font-medium">{job.period}</p>
                    <p className="text-xs text-[#94a3b8]">{job.duration}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed"
                    >
                      <span className="text-[#1e40af] mt-0.5 shrink-0 font-bold">›</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
