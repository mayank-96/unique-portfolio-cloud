import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3";
}

export const WordReveal = ({ text, className = "", as: Tag = "p" }: WordRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });

  const words = useMemo(() => text.split(/(\s+)/), [text]);
  const wordTokens = words.filter((w) => w.trim().length > 0);

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((token, i) => {
        if (!token.trim()) return <span key={i}>{token}</span>;
        const wordIndex = wordTokens.indexOf(token);
        const start = wordIndex / wordTokens.length;
        const end = start + 1 / wordTokens.length;
        return (
          <RevealWord key={i} progress={scrollYProgress} start={start} end={end}>
            {token}
          </RevealWord>
        );
      })}
    </Tag>
  );
};

const RevealWord = ({
  progress,
  start,
  end,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  children: React.ReactNode;
}) => {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
};

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export const FadeInUp = ({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: FadeInUpProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-10% 0px" }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
  >
    {children}
  </motion.div>
);
