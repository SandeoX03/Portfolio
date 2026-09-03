import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { certificates } from "../data/portfolio";

export default function Certificates() {
  return (
    <SectionWrapper id="certificates" className="border-t border-[var(--color-line)]">
      <SectionHeading label="Certificates" title="Courses and credentials" />

      <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {certificates.map((cert) => (
          <li
            key={cert.name}
            className="grid grid-cols-12 gap-3 py-5 min-w-0 items-baseline"
          >
            <div className="col-span-9 sm:col-span-8 min-w-0">
              <h3 className="text-[0.9375rem] text-[var(--color-ink)] leading-snug">
                {cert.name}
              </h3>
              <p className="text-sm text-[var(--color-ink-3)] mt-1">
                {cert.issuer}
                {"id" in cert && cert.id ? ` · ${cert.id}` : ""}
              </p>
            </div>
            <p className="col-span-3 sm:col-span-4 font-mono text-xs text-[var(--color-ink-3)] text-right">
              {cert.year}
            </p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
