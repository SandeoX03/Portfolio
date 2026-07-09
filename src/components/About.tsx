import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { aboutContent, honors } from "../data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about" className="section-alt">
      <SectionHeading
        label="About Me"
        title="Passionate about security, driven by curiosity"
        description="Get to know the person behind the code — my story, values, and what fuels my work in cybersecurity and cloud computing."
      />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-6">
          <p className="text-lg text-[#1e293b] leading-relaxed font-medium">{aboutContent.intro}</p>

          {aboutContent.story.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-[#475569] leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {aboutContent.highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-5 text-center"
              >
                <p className="text-2xl font-bold gradient-text mb-1">{item.value}</p>
                <p className="text-xs text-[#64748b] uppercase tracking-wider font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="icon-box h-9 w-9">
                <FaAward size={16} />
              </div>
              <h3 className="font-semibold text-[#0f172a]">Honors & Awards</h3>
            </div>
            <ul className="space-y-3">
              {honors.map((honor) => (
                <li key={honor} className="flex items-start gap-2.5 text-sm text-[#475569]">
                  <span className="text-[#1e40af] mt-0.5 shrink-0 font-bold">•</span>
                  {honor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
