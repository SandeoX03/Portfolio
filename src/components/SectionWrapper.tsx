import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 py-20 md:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto w-full max-w-5xl min-w-0"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 md:mb-16 max-w-2xl min-w-0">
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        <p className="label-text">{label}</p>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-400 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
