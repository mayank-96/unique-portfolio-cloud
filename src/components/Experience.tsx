import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { FadeInUp } from "@/components/ui/ScrollReveal";

const experiences = [
  {
    id: "velt",
    company: "Velt",
    companyNote: "[YC W22]",
    title: "Founding UI Engineer",
    period: "12/2023 — Present",
    startDate: "12/2023",
    endDate: "Present",
    location: "Remote · India",
    isInternship: false,
    bullets: [
      <>Architected a framework-agnostic <a href="https://velt.dev/components" target="_blank" rel="noopener noreferrer" className="link-reveal text-accent-ed" data-cursor>Customizable Components</a> system, driving 6× revenue growth.</>,
      <>Built a <a href="https://velt.dev/theming" target="_blank" rel="noopener noreferrer" className="link-reveal text-accent-ed" data-cursor>Theming system</a> that cut user implementation time by ~80%.</>,
      <>Shipped a collaborative <a href="https://drive.usesuperflow.com/upload" target="_blank" rel="noopener noreferrer" className="link-reveal text-accent-ed" data-cursor>File Drive</a> with custom media players — +10% revenue.</>,
      <>Refactored legacy onboarding for Superflow, reducing bugs by ~99%.</>,
      "Introduced ARIA, test IDs and i18n primitives across the SDK surface.",
    ],
  },
  {
    id: "geekyants-se3",
    company: "GeekyAnts",
    title: "Software Engineer · III",
    period: "07/2023 — 12/2023",
    startDate: "07/2023",
    endDate: "12/2023",
    location: "Bangalore, India",
    isInternship: false,
    bullets: [
      <>Built an internal Figma plugin that auto-generates a design system from Storybook — cut designer effort ~99% (114 likes, 6.2k users).</>,
      <>Shipped the <a href="https://www.figma.com/community/plugin/1304000704678516266/gluestack" target="_blank" rel="noopener noreferrer" className="link-reveal text-accent-ed" data-cursor>GlueStack Figma plugin</a> for batch color/font edits (28 likes, 1.3k users).</>,
    ],
  },
  {
    id: "geekyants-se1",
    company: "GeekyAnts",
    title: "Software Engineer · I",
    period: "07/2022 — 07/2023",
    startDate: "07/2022",
    endDate: "07/2023",
    location: "Bangalore, India",
    isInternship: false,
    bullets: [
      <>Co-created <a href="https://gluestack.io/" target="_blank" rel="noopener noreferrer" className="link-reveal text-accent-ed" data-cursor>GlueStack</a> — a universal component library (3.5k ★, 14k monthly npm users).</>,
      "Led small teams on setup, reviews, refactors.",
      "Built a plugin system generating multiple targets from a single Storybook.",
    ],
  },
  {
    id: "geekyants-intern",
    company: "GeekyAnts",
    title: "Software Engineer Intern",
    period: "11/2021 — 07/2022",
    startDate: "11/2021",
    endDate: "07/2022",
    location: "Bangalore, India",
    isInternship: true,
    bullets: [
      <>Contributed to <a href="https://nativebase.io/" target="_blank" rel="noopener noreferrer" className="link-reveal text-accent-ed" data-cursor>NativeBase</a> core — 65k+ weekly downloads, 18k ★.</>,
      "Actively maintained the library, resolving GitHub issues and shipping UX improvements.",
    ],
  },
  {
    id: "educompanion",
    company: "EduCompanion",
    title: "Backend Developer Intern",
    period: "07/2021 — 11/2021",
    startDate: "07/2021",
    endDate: "11/2021",
    location: "Remote · Murcia, Spain",
    isInternship: true,
    bullets: [
      "Built a MOOC platform with the MERN stack.",
      "Shipped auth, course filtering and an admin dashboard.",
    ],
  },
  {
    id: "destroai",
    company: "Destro.ai",
    title: "Data Science Intern",
    period: "04/2021 — 05/2021",
    startDate: "04/2021",
    endDate: "05/2021",
    location: "Remote · Mumbai, India",
    isInternship: true,
    bullets: [
      "Automated data collection via scheduled scripts.",
      "Built a WordPress site and extended a Flutter app.",
    ],
  },
  {
    id: "amazebasket",
    company: "AmazeBasket",
    title: "AI / ML Intern",
    period: "03/2021 — 05/2021",
    startDate: "03/2021",
    endDate: "05/2021",
    location: "Remote · Mumbai, India",
    isInternship: true,
    bullets: [
      <>Built a <a href="https://github.com/mayank-96/chatbot-flask-api" target="_blank" rel="noopener noreferrer" className="link-reveal text-accent-ed" data-cursor>Chatbot API</a> (Bi-LSTM).</>,
      <>Shipped a <a href="https://github.com/mayank-96/sentiment-analysis-api" target="_blank" rel="noopener noreferrer" className="link-reveal text-accent-ed" data-cursor>Sentiment API</a> for satisfaction scoring.</>,
      <>Built an <a href="https://github.com/mayank-96/recipe-recommendation-api" target="_blank" rel="noopener noreferrer" className="link-reveal text-accent-ed" data-cursor>Ingredient Recommendation API</a> (KNN).</>,
    ],
  },
];

const parseDate = (d: string) => (d === "Present" ? new Date() : (() => {
  const [m, y] = d.split("/");
  return new Date(parseInt(y), parseInt(m) - 1);
})());

const duration = (start: string, end: string) => {
  const s = parseDate(start), e = parseDate(end);
  const m = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  const y = Math.floor(m / 12), mo = m % 12;
  if (y === 0) return `${mo}mo`;
  if (mo === 0) return `${y}y`;
  return `${y}y ${mo}mo`;
};

const Experience = () => {
  const [includeInternships, setIncludeInternships] = useState(true);
  const [openIndex, setOpenIndex] = useState<number>(0);

  const list = useMemo(
    () => (includeInternships ? experiences : experiences.filter((e) => !e.isInternship)),
    [includeInternships]
  );

  const total = useMemo(() => {
    const earliest = list.reduce<Date | null>((acc, e) => {
      const d = parseDate(e.startDate);
      return !acc || d < acc ? d : acc;
    }, null);
    if (!earliest) return "—";
    const now = new Date();
    const m = (now.getFullYear() - earliest.getFullYear()) * 12 + (now.getMonth() - earliest.getMonth());
    const y = Math.floor(m / 12), mo = m % 12;
    return `${y}y ${mo}mo`;
  }, [list]);

  return (
    <section id="experience" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <SectionKicker index="03" label="Experience" />
            <h2 className="mt-6 font-serif-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
              Places I've <em className="italic">shipped</em> things.
            </h2>
          </div>
          <div className="flex items-end gap-8 font-mono text-[11px] uppercase tracking-[0.22em]">
            <div>
              <div className="text-dim-ed">Total</div>
              <div className="mt-1 text-accent-ed">{total}</div>
            </div>
            <button
              onClick={() => setIncludeInternships((v) => !v)}
              className="group flex items-center gap-3 text-muted-ed hover:text-[hsl(var(--text))] transition-colors"
              data-cursor
            >
              <span
                className={`relative inline-block h-4 w-8 rounded-full border border-ed ${
                  includeInternships ? "bg-accent-ed/30" : ""
                }`}
              >
                <span
                  className={`absolute top-[1px] h-[14px] w-[14px] rounded-full transition-all ${
                    includeInternships ? "left-[16px] bg-accent-ed" : "left-[1px] bg-[hsl(var(--text-muted))]"
                  }`}
                />
              </span>
              Include Internships
            </button>
          </div>
        </div>

        <ul className="border-t border-ed">
          {list.map((exp, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={exp.id} className="border-b border-ed">
                <FadeInUp delay={i * 0.03}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="group grid grid-cols-12 gap-4 w-full py-8 md:py-10 text-left items-baseline"
                    data-cursor
                    data-cursor-label={isOpen ? "Close" : "Open"}
                  >
                    <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
                      {exp.period}
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <h3 className="font-serif-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-tight">
                        {exp.company}
                        {exp.companyNote && (
                          <span className="ml-3 font-mono text-xs uppercase tracking-[0.22em] align-middle text-accent-ed">
                            {exp.companyNote}
                          </span>
                        )}
                      </h3>
                      <div className="mt-1 text-[hsl(var(--text))]/65 italic font-serif-display text-lg">
                        {exp.title}
                      </div>
                    </div>
                    <div className="col-span-6 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
                      <div className="text-dim-ed">Location</div>
                      <div>{exp.location}</div>
                    </div>
                    <div className="col-span-6 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-right">
                      <span className="text-accent-ed">
                        {duration(exp.startDate, exp.endDate)}
                      </span>
                      <span className="ml-4 inline-block transition-transform duration-500" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                        +
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-12 gap-4 pb-10 md:pb-12">
                          <div className="col-span-12 md:col-span-8 md:col-start-3">
                            <ul className="space-y-3 text-[hsl(var(--text))]/80 text-pretty">
                              {exp.bullets.map((b, idx) => (
                                <li key={idx} className="flex gap-4">
                                  <span className="font-mono text-[11px] text-dim-ed mt-[6px] w-6 shrink-0">
                                    {String(idx + 1).padStart(2, "0")}
                                  </span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </FadeInUp>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
