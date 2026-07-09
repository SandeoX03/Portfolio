import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2 font-bold text-lg text-[#0f172a] hover:text-[#1e40af] transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e40af] text-white text-xs font-bold">
            ST
          </span>
          <span className="hidden sm:inline text-sm font-semibold tracking-tight">
            Sushant Tandukar
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`px-3.5 py-2 text-sm rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? "text-[#1e40af] bg-[#dbeafe] font-medium"
                    : "text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9]"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav("contact")}
          className="hidden lg:inline-flex btn-primary !py-2 !px-5 !text-sm"
        >
          Get in Touch
        </button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-2xl text-[#475569]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#e2e8f0] shadow-lg"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                      activeSection === link.id
                        ? "text-[#1e40af] bg-[#dbeafe] font-medium"
                        : "text-[#64748b]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav("contact")}
                  className="w-full btn-primary justify-center"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
