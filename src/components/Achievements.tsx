import { SectionKicker } from "@/components/ui/SectionKicker";
import { FadeInUp } from "@/components/ui/ScrollReveal";

const items = [
  {
    title: "Winner · Web Development Contest",
    event: "Tech Adrishta Fest, SMIT",
    date: "12 / 2020",
    location: "Sikkim, India",
    note: "Built a web app that predicts your survival odds on the Titanic using ML.",
  },
  {
    title: "NPTEL Course Topper",
    event: "IIT Kharagpur",
    date: "04 / 2019",
    location: "India",
    note: "Joy of Computing with Python — 93%. Elite Certificate + Gold Medal, top 5% of 9,034 candidates.",
  },
  {
    title: "2nd Place · Hackathon",
    event: "Tech Adrishta Fest, SMIT",
    date: "12 / 2020",
    location: "Sikkim, India",
    note: "ChessMate — practice chess against a bot with live win probabilities and move analysis.",
  },
];

const Achievements = () => (
  <section id="achievements" className="relative py-28 md:py-40">
    <div className="mx-auto max-w-[1600px] px-6 md:px-10">
      <div className="mb-16">
        <SectionKicker index="05" label="Recognition" />
        <h2 className="mt-6 font-serif-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
          A few <em className="italic">wins</em> along the way.
        </h2>
      </div>

      <ul className="border-t border-ed">
        {items.map((it, i) => (
          <li key={it.title} className="border-b border-ed">
            <FadeInUp delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline">
                <div className="col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-dim-ed">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-11 md:col-span-5">
                  <div className="font-serif-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-tight">
                    {it.title}
                  </div>
                  <div className="mt-1 font-serif-display italic text-[hsl(var(--text))]/65">
                    {it.event}
                  </div>
                </div>
                <div className="hidden md:block md:col-span-4 text-[hsl(var(--text))]/70">
                  {it.note}
                </div>
                <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed md:text-right">
                  {it.date} · {it.location}
                </div>
                <div className="col-span-12 md:hidden text-[hsl(var(--text))]/70">{it.note}</div>
              </div>
            </FadeInUp>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Achievements;
