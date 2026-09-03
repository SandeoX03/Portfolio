import { motion } from "framer-motion";
import { personalInfo, heroContent } from "../data/portfolio";
import heroWave from "../assets/hero-wave.jpg";

export default function Home() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Wave pattern background image with blend mode */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroWave}
          alt=""
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-25 object-center pointer-events-none"
        />
      </div>

      {/* Subtle ambient backdrop glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none z-0" />

      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 min-w-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-md mb-6 shadow-sm shadow-emerald-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-medium text-emerald-300 tracking-wide">
              {heroContent.greeting} Taylor's CS Student & Security Specialist
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
            {heroContent.headline}
          </h1>

          {/* Role & Subtitle */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-sm sm:text-base text-emerald-400 mb-6">
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-200 font-medium">
              {personalInfo.title}
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">{personalInfo.subtitle}</span>
          </div>

          {/* Bio Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            {heroContent.description}
          </p>

          {/* Quick Focus Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="glass-pill">Cybersecurity</span>
            <span className="glass-pill">AWS Cloud</span>
            <span className="glass-pill">Retinal Diseases Detection Project</span>
            <span className="glass-pill">2× Dean's List</span>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={scrollToWork} className="btn-primary">
              {heroContent.cta}
              <span className="text-slate-900 font-bold">↓</span>
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Location details */}
          <div className="mt-12 flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-500"></span>
            <span>Based in {personalInfo.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
