import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.title = "404 — Mayank Pagar";
  }, []);

  return (
    <main className="relative min-h-screen flex items-center bg-[hsl(var(--bg))] text-[hsl(var(--text))]">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed mb-6">
              <span className="text-accent-ed mr-3">Error 404</span>
              Page not found
            </div>
            <h1 className="font-serif-display text-[clamp(4rem,16vw,14rem)] leading-[0.85] tracking-[-0.02em]">
              Not <em className="italic text-accent-ed">here</em>.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:pb-6 text-[hsl(var(--text))]/70">
            <p className="text-pretty">
              The page you're after doesn't exist — or it moved while I wasn't looking.
            </p>
            <a
              href="/"
              className="group mt-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-ed"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to the index
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
