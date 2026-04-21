import { ArrowUpRight } from "lucide-react";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { FadeInUp } from "@/components/ui/ScrollReveal";

const blogs = [
  {
    title: "NativeBase × Formik",
    url: "https://nativebase.hashnode.dev/nativebase-x-formik",
    publisher: "NativeBase · Hashnode",
    year: "2022",
    note: "A working guide to building composable forms in React Native with NativeBase + Formik.",
  },
  {
    title: "How Automated Web Scraping Can Ease Your Pain",
    url: "https://medium.com/python-in-plain-english/how-automated-web-scraping-can-ease-your-pain-8839f436bb13",
    publisher: "Medium · Python in Plain English",
    year: "2021",
    note: "A hands-on tutorial on writing resilient scheduled web-scraping pipelines in Python.",
  },
];

const talks = [
  {
    title: "Headless CMS as a Low-Code Tool",
    event: "GeekyAnts · Low-code Hybrid Meetup",
    url: "https://www.youtube.com/watch?v=7-UUZBn8e7c",
    year: "2022",
  },
  {
    title: "Panel · Low-code / No-code",
    event: "Featuring Sanket Sahu",
    url: "https://www.youtube.com/watch?v=cFcjH4WbRS0",
    year: "2022",
  },
];

const Row = ({
  num,
  title,
  meta,
  right,
  note,
  url,
}: {
  num: string;
  title: string;
  meta: string;
  right: string;
  note?: string;
  url: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline"
    data-cursor
    data-cursor-label="Read"
  >
    <span className="col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-dim-ed">
      {num}
    </span>
    <span className="col-span-11 md:col-span-6 font-serif-display text-[clamp(1.5rem,2.4vw,2.25rem)] leading-tight text-balance">
      {title}
      <span className="ml-3 font-serif-display italic text-[hsl(var(--text))]/55 text-lg">— {meta}</span>
    </span>
    <span className="hidden md:block md:col-span-3 text-[hsl(var(--text))]/60 text-pretty text-sm">
      {note}
    </span>
    <span className="col-span-12 md:col-span-2 flex items-center justify-start md:justify-end gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-ed">
      {right}
      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </span>
  </a>
);

const Blogs = () => (
  <section id="writing" className="relative py-32 md:py-48">
    <div className="mx-auto max-w-[1600px] px-6 md:px-10">
      <div className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12 md:col-span-8">
          <SectionKicker index="07" label="Writing & Talks" />
          <h2 className="mt-6 font-serif-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
            Thinking <em className="italic">out loud</em>.
          </h2>
        </div>
      </div>

      <div className="mb-16">
        <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
          <span className="text-accent-ed">※</span> Essays
        </div>
        <ul className="border-t border-ed">
          {blogs.map((b, i) => (
            <li key={b.title} className="border-b border-ed">
              <FadeInUp delay={i * 0.05}>
                <Row
                  num={String(i + 1).padStart(2, "0")}
                  title={b.title}
                  meta={b.publisher}
                  right={b.year}
                  note={b.note}
                  url={b.url}
                />
              </FadeInUp>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
          <span className="text-accent-ed">▶</span> Talks
        </div>
        <ul className="border-t border-ed">
          {talks.map((t, i) => (
            <li key={t.title} className="border-b border-ed">
              <FadeInUp delay={i * 0.05}>
                <Row
                  num={String(i + 1).padStart(2, "0")}
                  title={t.title}
                  meta={t.event}
                  right={t.year}
                  url={t.url}
                />
              </FadeInUp>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Blogs;
