import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo, heroContent } from "../data/portfolio";

export default function Home() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
    >
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-sm text-[#475569] mb-8 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </div>

            <p className="label-text mb-4">{heroContent.greeting}</p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] mb-6 leading-[1.1]">
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="gradient-text">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="tag">{personalInfo.title}</span>
              <span className="text-[#cbd5e1]">|</span>
              <span className="text-[#64748b] text-sm font-medium">{personalInfo.subtitle}</span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-xl md:text-2xl text-[#1e293b] max-w-2xl leading-relaxed mb-4 font-semibold"
            >
              {heroContent.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-[#64748b] max-w-xl leading-relaxed mb-10 text-base md:text-lg"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button onClick={scrollToAbout} className="btn-primary group">
                {heroContent.cta}
                <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
                <HiOutlineMail className="text-[#1e40af]" />
                Email Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-2 mt-10 text-sm text-[#64748b]"
            >
              <HiLocationMarker className="text-[#1e40af]" />
              {personalInfo.location}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="card p-8 relative">
              <div className="absolute -top-3 -right-3 h-20 w-20 rounded-2xl bg-[#dbeafe] -z-10" />
              <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full bg-[#f1f5f9] -z-10" />

              <p className="label-text mb-6">At a glance</p>

              <div className="space-y-5">
                {[
                  { label: "Education", value: "BSc Computer Science" },
                  { label: "University", value: "Taylor's University" },
                  { label: "Focus", value: "Cybersecurity & AWS" },
                  { label: "Recognition", value: "Dean's List × 2" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 border-b border-[#f1f5f9] last:border-0"
                  >
                    <span className="text-sm text-[#64748b]">{item.label}</span>
                    <span className="text-sm font-semibold text-[#0f172a]">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#f1f5f9]">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-link flex-1 !justify-start gap-2 !px-4 text-sm font-medium"
                >
                  <HiOutlineMail size={16} />
                  Connect
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#94a3b8]"
      >
        <HiArrowDown size={18} />
      </motion.div>
    </section>
  );
}
