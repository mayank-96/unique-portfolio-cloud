import { motion } from "framer-motion";

interface SectionKickerProps {
  index: string; // "01", "02"…
  label: string;
  className?: string;
}

export const SectionKicker = ({ index, label, className = "" }: SectionKickerProps) => (
  <motion.div
    className={`flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed ${className}`}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 0.5 }}
  >
    <span className="kicker-dot" />
    <span className="text-accent-ed">{index}</span>
    <span aria-hidden className="h-px w-8 bg-current opacity-40" />
    <span>{label}</span>
  </motion.div>
);

interface EditorialHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const EditorialHeading = ({ children, className = "" }: EditorialHeadingProps) => (
  <motion.h2
    className={`font-serif-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-balance ${className}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
  >
    {children}
  </motion.h2>
);
