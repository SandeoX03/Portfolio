import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 px-5 sm:px-8 py-8 bg-slate-950/60 backdrop-blur-md">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 min-w-0">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <p className="text-xs font-mono text-slate-400">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="font-mono text-xs text-slate-500 hidden sm:block">
            Cybersecurity · AWS Cloud · Systems Defense
          </p>

          <button
            onClick={scrollToTop}
            className="glass-pill text-xs text-slate-300 hover:text-emerald-400 transition-colors"
            aria-label="Back to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
