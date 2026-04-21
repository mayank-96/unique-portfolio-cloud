import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { name: "Index", href: "#hero", num: "00" },
  { name: "Work", href: "#work", num: "01" },
  { name: "About", href: "#about", num: "02" },
  { name: "Experience", href: "#experience", num: "03" },
  { name: "Writing", href: "#writing", num: "04" },
  { name: "Contact", href: "#contact", num: "05" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-[hsl(var(--bg)/0.7)] backdrop-blur-md border-b border-ed"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#hero" className="flex items-baseline gap-2 font-mono text-sm" data-cursor>
          <span className="text-accent-ed">●</span>
          <span className="uppercase tracking-[0.24em]">Mayank Pagar</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-reveal font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ed transition-colors hover:text-[hsl(var(--text))]"
                  data-cursor
                >
                  <span className="text-dim-ed mr-2">{link.num}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://drive.google.com/file/d/1kd6prOH4zqCzRvaJ17mlOz_VH6COTj8K/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-reveal font-mono text-[11px] uppercase tracking-[0.22em]"
            data-cursor
            data-cursor-label="Open"
          >
            Résumé ↗
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-[hsl(var(--text))]"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-[68px] bg-[hsl(var(--bg))] border-t border-ed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col divide-y divide-[hsl(var(--border))]">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline justify-between px-6 py-6 font-serif-display text-4xl"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-dim-ed">
                      {link.num}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
