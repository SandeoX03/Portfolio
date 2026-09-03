import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { aboutContent, honors } from "../data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about" className="border-t border-white/10">
      <SectionHeading label="About Me" title="Background & Academic Focus" />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 min-w-0">
        <div className="lg:col-span-7 space-y-6 min-w-0">
          <p className="text-white text-lg sm:text-xl font-medium leading-relaxed border-l-2 border-emerald-500 pl-4 py-0.5">
            {aboutContent.intro}
          </p>

          {aboutContent.story.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="lg:col-span-5 space-y-8 min-w-0">
          {/* Highlight metrics glass cards */}
          <div>
            <p className="label-text mb-4">Key Highlights</p>
            <dl className="grid grid-cols-2 gap-3">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-4 flex flex-col justify-between"
                >
                  <dt className="text-xs font-mono text-slate-400 mb-1">{item.label}</dt>
                  <dd className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Honors glass container */}
          <div className="glass-panel rounded-xl p-5 border border-white/10">
            <p className="label-text mb-4 text-emerald-400">Honors & Recognition</p>
            <ul className="space-y-3">
              {honors.map((honor) => (
                <li
                  key={honor}
                  className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✦</span>
                  <span>{honor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
