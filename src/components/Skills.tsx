import { SectionKicker } from "@/components/ui/SectionKicker";
import { FadeInUp } from "@/components/ui/ScrollReveal";
import { Marquee } from "@/components/ui/Marquee";

const groups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    label: "Frontend",
    items: [
      "React", "React Native", "Angular", "Lit", "HTML", "CSS",
      "Design Systems", "SDK Development", "Figma Plugins",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Cloud Functions", "REST APIs"],
  },
  {
    label: "Data",
    items: ["MySQL", "MongoDB", "Firebase", "Firestore"],
  },
  {
    label: "Craft",
    items: ["ARIA", "i18n", "Testing", "Debugging", "Agile", "Git", "Linux"],
  },
];

const ticker = [
  "a11y first", "motion with intent", "type over tooling", "systems thinking",
  "pixel discipline", "ship small, ship often", "docs as design", "APIs as UX",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-8">
            <SectionKicker index="04" label="Capabilities" />
            <h2 className="mt-6 font-serif-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
              A toolkit, <em className="italic">sharpened</em> over years.
            </h2>
          </div>
        </div>

        <div className="border-t border-ed">
          {groups.map((g, i) => (
            <FadeInUp key={g.label} delay={i * 0.04}>
              <div className="grid grid-cols-12 gap-4 border-b border-ed py-10 md:py-14 items-start">
                <div className="col-span-12 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
                  <span className="text-dim-ed mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {g.label}
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {g.items.map((t) => (
                      <span
                        key={t}
                        className="font-serif-display text-[clamp(1.25rem,2vw,1.9rem)] leading-none italic text-[hsl(var(--text))]/80 hover:text-accent-ed transition-colors"
                        data-cursor
                      >
                        {t}
                        <span className="ml-6 text-dim-ed not-italic">/</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        <div className="mt-20 border-y border-ed py-5">
          <Marquee speed={50} reverse>
            {ticker.map((t, i) => (
              <span
                key={i}
                className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-ed"
              >
                {t}
                <span className="mx-8 text-accent-ed">+</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
