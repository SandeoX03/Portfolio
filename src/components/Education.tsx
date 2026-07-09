import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education" className="section-alt">
      <SectionHeading
        label="Education"
        title="Academic foundation"
        description="Formal education that builds the theoretical and practical backbone of my cybersecurity and computer science journey."
      />

      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="icon-box h-14 w-14 shrink-0">
                <HiAcademicCap size={28} />
              </div>

              <div className="flex-grow">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0f172a]">{edu.institution}</h3>
                    <p className="text-[#1e40af] mt-1 font-medium">{edu.degree}</p>
                  </div>
                  <p className="font-mono text-sm text-[#64748b] whitespace-nowrap bg-[#f8fafc] px-3 py-1 rounded-lg border border-[#e2e8f0]">
                    {edu.period}
                  </p>
                </div>
                <p className="text-[#475569] text-sm mt-4 leading-relaxed">{edu.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
