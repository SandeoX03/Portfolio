import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { certificates } from "../data/portfolio";

export default function Certificates() {
  return (
    <SectionWrapper id="certificates" className="border-t border-white/10">
      <SectionHeading label="Certifications" title="Verified Credentials & Certifications" />

      <div className="glass-panel rounded-2xl p-4 sm:p-6 overflow-hidden">
        <ul className="divide-y divide-white/10">
          {certificates.map((cert, idx) => (
            <motion.li
              key={cert.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="grid grid-cols-12 gap-3 py-4 px-3 sm:px-4 rounded-xl hover:bg-white/[0.04] transition-colors items-center"
            >
              <div className="col-span-9 sm:col-span-8 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight flex items-center gap-2">
                  <span className="text-emerald-400 font-mono text-xs">✓</span>
                  {cert.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5 pl-5">
                  {cert.issuer}
                  {"id" in cert && cert.id ? ` · ID: ${cert.id}` : ""}
                </p>
              </div>
              <div className="col-span-3 sm:col-span-4 text-right">
                <span className="font-mono text-xs font-semibold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  {cert.year}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
