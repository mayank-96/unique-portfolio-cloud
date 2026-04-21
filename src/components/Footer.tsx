const nav = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Writing", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/mayank-96" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mayank-pagar" },
  { name: "Twitter / X", href: "https://x.com/mayankp09_" },
  { name: "Mail", href: "mailto:pagarmayank07@gmail.com" },
];

const Footer = () => (
  <footer className="relative border-t border-ed pt-16 pb-10">
    <div className="mx-auto max-w-[1600px] px-6 md:px-10">
      <div className="grid grid-cols-12 gap-6 mb-14">
        <div className="col-span-12 md:col-span-6">
          <div className="font-serif-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] tracking-[-0.02em] text-[hsl(var(--text))]/15 select-none">
            Mayank<em className="italic">.</em>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
          <div className="text-dim-ed mb-3">Sitemap</div>
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.name}>
                <a href={n.href} className="link-reveal hover:text-[hsl(var(--text))]" data-cursor>
                  {n.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed">
          <div className="text-dim-ed mb-3">Elsewhere</div>
          <ul className="space-y-2">
            {socials.map((n) => (
              <li key={n.name}>
                <a
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-reveal hover:text-[hsl(var(--text))]"
                  data-cursor
                >
                  {n.name} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-ed pt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-dim-ed">
        <div>© {new Date().getFullYear()} — Mayank Pagar. Made in Nashik.</div>
        <div>Portfolio · 2026 / v2 · Built with React + Framer Motion.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
