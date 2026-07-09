import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative px-6 py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
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
    <div className="mb-16">
      <p className="label-text mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight mb-4">{title}</h2>
      {description && (
        <p className="text-[#475569] max-w-2xl text-lg leading-relaxed">{description}</p>
      )}
      <div className="accent-line mt-6" />
    </div>
  );
}
