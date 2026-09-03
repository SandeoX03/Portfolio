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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled || mobileOpen
          ? "bg-[var(--color-bg)] border-b border-[var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 sm:px-8 h-14">
        <button
          onClick={() => handleNav("home")}
          className="font-serif text-[0.95rem] tracking-tight text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors shrink-0"
        >
          {personalInfo.name}
        </button>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`text-[0.8125rem] tracking-wide transition-colors ${
                  activeSection === link.id
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-ink-3)] hover:text-[var(--color-ink)]"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8125rem] text-[var(--color-ink-3)] hover:text-[var(--color-ink)] transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[var(--color-ink)] p-1"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--color-line)] bg-[var(--color-bg)]"
          >
            <ul className="flex flex-col px-5 py-6 gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={`w-full text-left py-3 font-serif text-2xl ${
                      activeSection === link.id
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-ink-2)]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 font-serif text-2xl text-[var(--color-ink-2)]"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
