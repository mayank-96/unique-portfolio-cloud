import { ArrowUpRight } from "lucide-react";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { FadeInUp } from "@/components/ui/ScrollReveal";

const contributions = [
  {
    project: "React Native",
    org: "facebook/react-native",
    title: "Added aria-live alias for accessibilityLiveRegion",
    pr: "#34555",
    url: "https://github.com/facebook/react-native/pull/34555",
    note: "Unified aria-live with accessibilityLiveRegion, mapped 'off' → 'none'.",
  },
  {
    project: "NativeBase",
    org: "GeekyAnts/NativeBase",
    title: "Core maintenance & feature work (65k+ weekly d/l)",
    pr: "multi",
    url: "https://github.com/GeekyAnts/NativeBase",
    note: "Issue triage, a11y patches and UX refinements across the primitive layer.",
  },
];

const OpenSource = () => (
  <section id="opensource" className="relative py-28 md:py-40">
    <div className="mx-auto max-w-[1600px] px-6 md:px-10">
      <div className="mb-16 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <SectionKicker index="06" label="Open Source" />
          <h2 className="mt-6 font-serif-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
            Small contributions, <em className="italic">wide</em> reach.
          </h2>
        </div>
      </div>

      <ul className="border-t border-ed">
        {contributions.map((c, i) => (
          <li key={c.project} className="border-b border-ed">
            <FadeInUp delay={i * 0.05}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline"
                data-cursor
                data-cursor-label="PR"
              >
                <span className="col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-dim-ed">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-11 md:col-span-4 font-serif-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-tight">
                  {c.project}
                  <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.22em] text-dim-ed">
                    {c.org}
                  </span>
                </span>
                <span className="col-span-10 md:col-span-5 text-[hsl(var(--text))]/75 text-pretty">
                  {c.title}
                  <span className="block mt-1 text-[hsl(var(--text))]/55 text-sm">{c.note}</span>
                </span>
                <span className="col-span-2 md:col-span-2 flex items-center justify-end gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-ed">
                  {c.pr}
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </FadeInUp>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default OpenSource;
