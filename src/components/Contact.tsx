import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionKicker } from "@/components/ui/SectionKicker";

const channels = [
  { label: "Email", value: "pagarmayank07@gmail.com", href: "mailto:pagarmayank07@gmail.com" },
  { label: "GitHub", value: "@mayank-96", href: "https://github.com/mayank-96" },
  { label: "LinkedIn", value: "/in/mayank-pagar", href: "https://linkedin.com/in/mayank-pagar" },
  { label: "Twitter / X", value: "@mayankp09_", href: "https://x.com/mayankp09_" },
  { label: "Phone", value: "+91 7620 415 699", href: "tel:+917620415699" },
];

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  // live clock in user locale, just for flavor
  const clockRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const update = () => {
      if (!clockRef.current) return;
      clockRef.current.textContent = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="contact" ref={ref} className="relative py-36 md:py-56 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionKicker index="09" label="Contact" />

        <motion.div style={{ x }} className="mt-10">
          <h2 className="font-serif-display text-[clamp(3rem,13vw,12rem)] leading-[0.9] tracking-[-0.02em]">
            <span className="block">Let's <em className="italic text-accent-ed">build</em></span>
            <span className="block">something <em className="italic">strange</em></span>
            <span className="block">and <em className="italic">well-made</em>.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <a
              href="mailto:pagarmayank07@gmail.com"
              className="group inline-flex items-center gap-4 font-serif-display text-[clamp(1.75rem,3vw,2.5rem)] italic link-reveal"
              data-cursor
              data-cursor-label="Mail"
            >
              pagarmayank07@gmail.com
              <ArrowUpRight size={22} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="mt-6 max-w-xl text-[hsl(var(--text))]/70 text-pretty">
              I'm selectively taking on collaborations — SDK engineering, design-systems
              work, component libraries, realtime / collab products. If any of that sounds
              like your thing, say hi.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5">
            <ul className="border-t border-ed">
              {channels.map((c) => (
                <li key={c.label} className="border-b border-ed">
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-baseline justify-between gap-4 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed hover:text-[hsl(var(--text))] transition-colors"
                    data-cursor
                  >
                    <span className="text-dim-ed">{c.label}</span>
                    <span>{c.value} ↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-dim-ed">
              <span>Local time · Nashik, IN</span>
              <span className="text-[hsl(var(--text))]" ref={clockRef}>—</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
