import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, personalInfo, sectionNavMap } from "../data/portfolio";

const trackedSections = Object.keys(sectionNavMap);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      for (let i = trackedSections.length - 1; i >= 0; i--) {
        const id = trackedSections[i];
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 110) {
          setActiveSection(sectionNavMap[id] ?? id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ${
          scrolled || mobileOpen
            ? "border-white/12 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-black/60"
            : "border-white/8 bg-slate-950/50 backdrop-blur-md shadow-lg shadow-black/30"
        }`}
      >
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2.5 font-sans font-semibold text-sm tracking-tight text-slate-100 hover:text-emerald-400 transition-colors shrink-0 group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="group-hover:translate-x-0.5 transition-transform">{personalInfo.name}</span>
        </button>

        <ul className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wide font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 shadow-sm shadow-emerald-950/50"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          <li className="ml-2 pl-2 border-l border-white/10">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill text-xs text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
            >
              GitHub ↗
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-300 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto md:hidden mt-2 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-2xl p-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNav(link.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl font-mono text-sm tracking-wide transition-all ${
                        isActive
                          ? "bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/25"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
              <li className="pt-2 mt-1 border-t border-white/10">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl font-mono text-sm text-slate-300 hover:bg-white/5 hover:text-emerald-400 transition-all"
                >
                  <span>GitHub</span>
                  <span className="text-xs text-slate-500">github.com/SandeoX03</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
