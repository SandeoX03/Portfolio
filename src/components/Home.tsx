import { motion } from "framer-motion";
import { personalInfo, heroContent } from "../data/portfolio";

export default function Home() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 pt-28 pb-20 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-[0.95rem] text-[var(--color-ink-2)] mb-5">
            {heroContent.greeting}
          </p>

          <h1 className="font-serif text-[2.35rem] sm:text-5xl md:text-[3.5rem] leading-[1.12] tracking-tight text-[var(--color-ink)] mb-6">
            {heroContent.headline}
          </h1>

          <p className="text-[var(--color-ink-2)] text-base md:text-lg leading-relaxed max-w-xl mb-4">
            {personalInfo.title}
            <span className="text-[var(--color-ink-3)]"> · </span>
            {personalInfo.subtitle}
          </p>

          <p className="text-[var(--color-ink-2)] text-base md:text-lg leading-relaxed max-w-xl mb-10">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button onClick={scrollToWork} className="btn-primary">
              {heroContent.cta}
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>

          <p className="mt-12 text-sm text-[var(--color-ink-3)]">{personalInfo.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
