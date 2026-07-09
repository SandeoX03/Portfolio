import { motion } from "framer-motion";
import { FaShieldAlt, FaCloud, FaCode, FaBrain } from "react-icons/fa";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { skills } from "../data/portfolio";

const iconMap = {
  shield: FaShieldAlt,
  cloud: FaCloud,
  code: FaCode,
  brain: FaBrain,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Skills"
        title="Tools & technologies I work with"
        description="A blend of security expertise, cloud proficiency, and analytical thinking — constantly expanding through certifications and hands-on projects."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, i) => {
          const Icon = iconMap[skill.icon as keyof typeof iconMap];

          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-6 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="icon-box h-11 w-11">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] group-hover:text-[#1e40af] transition-colors">
                  {skill.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-[#f8fafc] text-sm text-[#475569] border border-[#e2e8f0] hover:border-[#93c5fd] hover:text-[#1e40af] transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
