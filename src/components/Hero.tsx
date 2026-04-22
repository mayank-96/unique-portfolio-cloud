import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const TICKER = [
  "React", "TypeScript", "Design Systems", "SDK Engineering",
  "Angular", "React Native", "Framer Motion", "Figma Plugins",
  "Component Libraries", "Accessibility", "Realtime Collaboration",
];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between pt-36 pb-10 md:pt-44 md:pb-12 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
          <div className="col-span-6 md:col-span-3">
            <div className="text-dim-ed mb-1">Currently</div>
            <div>Founding UI Engineer · Velt <span className="text-accent-ed">[YC W22]</span></div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-dim-ed mb-1">Based in</div>
            <div>Nashik · India — 19.99°N, 73.78°E</div>
          </div>
          <div className="hidden md:block col-span-3">
            <div className="text-dim-ed mb-1">Portfolio</div>
            <div>2026 Edition / v2</div>
          </div>
          <div className="hidden md:block col-span-3 text-right">
            <div className="text-dim-ed mb-1">Status</div>
            <div className="inline-flex items-center gap-2">
              <span className="relative inline-block h-2 w-2 rounded-full bg-accent-ed">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent-ed opacity-60" />
              </span>
              Available for select work
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="mx-auto w-full max-w-[1600px] px-6 md:px-10"
        style={{ y: titleY }}
      >
        <h1 className="font-serif-display text-[clamp(3.5rem,12.5vw,11.5rem)] leading-[0.92] tracking-[-0.02em] text-balance">
          <Reveal delay={0.05}>
            <span className="block">Designing <em className="italic text-accent-ed">soft</em>ware</span>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="block">with <em className="italic">intentional</em> craft</span>
          </Reveal>
          <Reveal delay={0.35}>
            <span className="block">
              <span className="text-dim-ed">and </span>
              <span className="italic">quiet</span> detail.
            </span>
          </Reveal>
        </h1>
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-[1600px] px-6 md:px-10"
        style={{ opacity: subOpacity }}
      >
        <div className="grid grid-cols-12 gap-6 items-end">
          <motion.p
            className="col-span-12 md:col-span-5 md:col-start-8 text-[hsl(var(--text))]/80 text-pretty md:text-right"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Software engineer with five years shipping collaboration SDKs, component libraries
            and design-system tooling used by thousands of developers.
          </motion.p>
          <div className="col-span-12 md:col-span-3 md:col-start-1 md:row-start-1 flex md:items-end">
            <a
              href="#work"
              className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed hover:text-[hsl(var(--text))] transition-colors"
              data-cursor
              data-cursor-label="Scroll"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ed group-hover:border-[hsl(var(--text))] transition-colors">
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown size={14} />
                </motion.span>
              </span>
              Scroll to explore
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 border-y border-ed py-6">
        <Marquee speed={55}>
          {TICKER.map((t, i) => (
            <span
              key={i}
              className="font-serif-display text-3xl md:text-4xl tracking-tight text-[hsl(var(--text))]/80"
            >
              {t}
              <span className="mx-8 text-accent-ed">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export default Hero;
