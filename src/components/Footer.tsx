import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] px-5 sm:px-8 py-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-w-0">
        <p className="text-sm text-[var(--color-ink-3)]">
          © {year} {personalInfo.name}
        </p>
        <p className="font-mono text-xs text-[var(--color-ink-3)]">
          Cybersecurity · AWS · Computer Science
        </p>
      </div>
    </footer>
  );
}
