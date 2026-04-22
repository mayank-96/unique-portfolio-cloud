import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { FadeInUp } from "@/components/ui/ScrollReveal";

type Project = {
  title: string;
  year: string;
  tag: string;
  tech: string[];
  link?: string;
  image: string;
};

const personal: Project[] = [
  {
    title: "Mariela Cushions",
    year: "2024",
    tag: "Static · E-commerce",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://mariela-cushions.vercel.app/",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Wave",
    year: "2023",
    tag: "Music player",
    tech: ["React", "Web Audio", "CSS"],
    link: "https://wave-music-player-psi.vercel.app/",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "WhatToWatch",
    year: "2022",
    tag: "Media · Search",
    tech: ["React", "TMDb API", "CSS"],
    link: "https://whattowatch.app",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
  },
];

const professional: Project[] = [
  {
    title: "Velt Collaboration SDK",
    year: "2023 — now",
    tag: "Realtime SDK",
    tech: ["Angular", "TypeScript", "React"],
    link: "https://velt.dev",
    image: "/projects/velt.png",
  },
  {
    title: "GlueStack UI",
    year: "2022 — 2023",
    tag: "Component library",
    tech: ["React", "React Native", "Storybook"],
    link: "https://gluestack.io",
    image: "/projects/gluestack.png",
  },
  {
    title: "NativeBase",
    year: "2021 — 2022",
    tag: "RN component library",
    tech: ["React Native", "TypeScript"],
    link: "https://nativebase.io",
    image: "/projects/nativebase.png",
  },
];

const ProjectList = ({ items }: { items: Project[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseMove={(e) => {
        const r = wrapRef.current?.getBoundingClientRect();
        if (!r) return;
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
    >
      <ul className="border-t border-ed">
        {items.map((p, i) => (
          <li
            key={p.title}
            className="border-b border-ed"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row group grid grid-cols-12 items-baseline gap-4 py-7 md:py-9"
              data-cursor
              data-cursor-label="View"
            >
              <span className="col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-dim-ed">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="project-row-title col-span-6 md:col-span-5 font-serif-display text-[clamp(1.75rem,3.6vw,3rem)] leading-none tracking-tight transition-colors text-[hsl(var(--text))]/60">
                {p.title}
              </span>
              <span className="project-row-dim hidden md:block md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-dim-ed">
                {p.tag}
              </span>
              <span className="col-span-3 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed text-right md:text-left">
                {p.year}
              </span>
              <span className="col-span-2 md:col-span-1 flex items-center justify-end text-muted-ed transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                <ArrowUpRight size={20} />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            key={hovered}
            className="pointer-events-none fixed z-40 hidden md:block overflow-hidden rounded-sm bg-[hsl(var(--surface))] border border-ed"
            style={{
              left: mouse.x + (wrapRef.current?.getBoundingClientRect().left ?? 0) + 40,
              top: mouse.y + (wrapRef.current?.getBoundingClientRect().top ?? 0) - 130,
              width: 440,
              height: 260,
            }}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <img
              src={items[hovered].image}
              alt=""
              className="h-full w-full object-contain"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 bg-gradient-to-t from-black/80 to-transparent">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[hsl(var(--text))]">
                {items[hovered].tech.join(" · ")}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-8">
            <SectionKicker index="01" label="Selected Work" />
            <h2 className="mt-6 font-serif-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
              A decade of <em className="italic">small</em> interfaces and <em className="italic">large</em> systems.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-4 text-[hsl(var(--text))]/70 text-pretty">
            From side projects that taught me the fundamentals, to SDKs and component libraries
            shipping to teams around the world. Hover a row to preview — click through for more.
          </div>
        </div>

        <FadeInUp>
          <div className="mb-20">
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
              <span className="text-accent-ed">★</span> Professional
            </div>
            <ProjectList items={professional} />
          </div>
        </FadeInUp>

        {/* <FadeInUp delay={0.05}>
          <div>
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
              <span className="text-accent-ed">◆</span> Personal
            </div>
            <ProjectList items={personal} />
          </div>
        </FadeInUp> */}

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/mayank-96"
            target="_blank"
            rel="noopener noreferrer"
            className="link-reveal font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed"
            data-cursor
            data-cursor-label="GitHub"
          >
            More on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
