import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { certificates } from "../data/portfolio";

export default function Certificates() {
  return (
    <SectionWrapper id="certificates">
      <SectionHeading
        label="Certificates"
        title="Continuous learning & growth"
        description="Industry-recognized certifications and programs that validate my skills in cloud computing, AI, design thinking, and cybersecurity."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="card p-5 group"
          >
            <div className="flex items-start gap-3">
              <div className="icon-box h-10 w-10 shrink-0">
                <HiBadgeCheck size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] text-sm leading-snug mb-1 group-hover:text-[#1e40af] transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-[#64748b]">{cert.issuer}</p>
                <p className="font-mono text-xs text-[#1e40af] mt-2 font-medium">{cert.year}</p>
                {"id" in cert && cert.id && (
                  <p className="font-mono text-[10px] text-[#94a3b8] mt-1">ID: {cert.id}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
