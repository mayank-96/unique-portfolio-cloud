import { useEffect, useState } from "react";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { WordReveal, FadeInUp } from "@/components/ui/ScrollReveal";

const traits = [
  { k: "Craft", v: "Pixel-perfect, interaction-first." },
  { k: "Scope", v: "From primitives to products." },
  { k: "Stack", v: "React · TypeScript · Design Systems." },
  { k: "Bias", v: "Ship, measure, refine." },
];

const formatCount = (n: number): string => {
  if (n >= 1000) {
    const k = n / 1000;
    return (k >= 10 ? Math.round(k) : Math.round(k * 10) / 10) + "k";
  }
  return String(n);
};

const fetchStars = async (repo: string, fallback: number): Promise<number> => {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`);
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : fallback;
  } catch {
    return fallback;
  }
};

const fetchWeeklyDownloads = async (pkg: string, fallback: number): Promise<number> => {
  try {
    const res = await fetch(`https://api.npmjs.org/downloads/point/last-week/${pkg}`);
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    return typeof data.downloads === "number" ? data.downloads : fallback;
  } catch {
    return fallback;
  }
};

const About = () => {
  const [stats, setStats] = useState({
    gluestackStars: 5000,
    gluestackDownloads: 29000,
    nativebaseStars: 20000,
    nativebaseDownloads: 41000,
  });

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetchStars("gluestack/gluestack-ui", 5000),
      fetchWeeklyDownloads("@gluestack-ui/themed", 29000),
      fetchStars("GeekyAnts/NativeBase", 20000),
      fetchWeeklyDownloads("native-base", 41000),
    ]).then(([gluestackStars, gluestackDownloads, nativebaseStars, nativebaseDownloads]) => {
      if (cancelled) return;
      setStats({ gluestackStars, gluestackDownloads, nativebaseStars, nativebaseDownloads });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <SectionKicker index="02" label="About" />
            <div className="mt-16 hidden md:block space-y-8">
              {traits.map((t) => (
                <div key={t.k} className="border-t border-ed pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim-ed">
                    {t.k}
                  </div>
                  <div className="mt-1 font-serif-display text-xl italic text-[hsl(var(--text))]/85">
                    {t.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 lg:col-span-8 lg:col-start-5">
            <WordReveal
              as="p"
              className="font-serif-display text-[clamp(1.9rem,3.4vw,3.25rem)] leading-[1.15] tracking-tight text-balance"
              text="I build software with care for the small moments — the hover that feels right, the empty state that still has voice, the transition that respects your attention. Most recently at Velt, I've been architecting a framework-agnostic SDK that lets teams drop Figma-like collaboration into any app in minutes, not weeks."
            />

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              <FadeInUp>
                <p className="text-[hsl(var(--text))]/75 text-pretty">
                  Earlier, I co-created{" "}
                  <a
                    href="https://gluestack.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-reveal text-accent-ed"
                    data-cursor
                    data-cursor-label="View"
                  >
                    GlueStack
                  </a>
                  , a universal component library that grew to {formatCount(stats.gluestackStars)} stars and {formatCount(stats.gluestackDownloads)} weekly
                  npm downloads, and shipped core features into{" "}
                  <a
                    href="https://nativebase.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-reveal text-accent-ed"
                    data-cursor
                    data-cursor-label="View"
                  >
                    NativeBase
                  </a>{" "}
                  ({formatCount(stats.nativebaseStars)} stars, {formatCount(stats.nativebaseDownloads)} weekly downloads).
                </p>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <p className="text-[hsl(var(--text))]/75 text-pretty">
                  I think in systems but live in the details — accessibility,
                  theming primitives, motion. Outside work: sketching, video edits,
                  and long-form tutorials for developers starting out.
                </p>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
