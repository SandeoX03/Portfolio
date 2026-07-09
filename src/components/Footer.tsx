import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1e40af] text-white text-[10px] font-bold">
            ST
          </span>
          <p className="text-sm text-[#64748b]">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <p className="font-mono text-xs text-[#94a3b8]">
          Cybersecurity · AWS · Computer Science
        </p>
      </div>
    </footer>
  );
}
