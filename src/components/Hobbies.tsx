import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { FadeInUp } from "@/components/ui/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const sketches = [
  "https://i.imgur.com/1lrgDuh.jpg",
  "https://i.imgur.com/QofQoSg.jpg",
  "https://i.imgur.com/c47D1kW.jpg",
];

const Hobbies = () => {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i === null ? i : (i + 1) % sketches.length));
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i === null ? i : (i - 1 + sketches.length) % sketches.length));
  };

  return (
    <section id="offclock" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 mb-16 items-end">
          <div className="col-span-12 md:col-span-8">
            <SectionKicker index="08" label="Off the clock" />
            <h2 className="mt-6 font-serif-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
              When I'm <em className="italic">not</em> shipping.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 text-[hsl(var(--text))]/70 md:text-right">
            Sketching by hand and cutting together film edits keeps the
            design muscle honest.
          </p>
        </div>

        <FadeInUp>
          <a
            href="https://www.youtube.com/watch?v=aHXhtOFzseE"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-t border-b border-ed py-10 md:py-14 mb-20"
            data-cursor
            data-cursor-label="Play"
          >
            <div className="grid grid-cols-12 gap-4 items-baseline">
              <span className="col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-dim-ed">
                01
              </span>
              <span className="col-span-11 md:col-span-7 font-serif-display text-[clamp(1.75rem,3vw,2.75rem)] leading-tight">
                Peaky Blinders — Thomas Shelby Edit
              </span>
              <span className="hidden md:block md:col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
                Video Edit
              </span>
              <span className="col-span-12 md:col-span-2 flex items-center justify-end gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-ed">
                YouTube
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        </FadeInUp>

        <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
          <span className="text-accent-ed">✎</span> Sketchbook
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-ed">
          {sketches.map((src, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setIndex(i)}
              className="group relative aspect-[4/5] overflow-hidden border-r border-ed last:border-r-0"
              data-cursor
              data-cursor-label="Zoom"
            >
              <img
                src={src}
                alt={`Sketch ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[hsl(var(--text))]/80 bg-gradient-to-t from-black/70 to-transparent">
                <span>#{String(i + 1).padStart(2, "0")}</span>
                <span>Graphite · paper</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={index !== null} onOpenChange={close}>
        <DialogContent className="max-w-[95vw] w-auto max-h-[95vh] h-auto p-0 border-none bg-transparent shadow-none [&>button]:hidden">
          <div className="relative flex items-center justify-center group">
            {index !== null && (
              <motion.img
                src={sketches[index]}
                alt=""
                className="max-w-full max-h-[90vh] object-contain"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                key={index}
              />
            )}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full border border-[hsl(var(--text))]/30 bg-black/40 text-[hsl(var(--text))] transition-opacity opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full border border-[hsl(var(--text))]/30 bg-black/40 text-[hsl(var(--text))] transition-opacity opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
              <ArrowRight size={18} />
            </button>
            <button
              onClick={close}
              className="absolute right-4 top-4 grid place-items-center h-10 w-10 rounded-full border border-[hsl(var(--text))]/30 bg-black/40 text-[hsl(var(--text))] transition-opacity opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
              <X size={18} />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hobbies;
