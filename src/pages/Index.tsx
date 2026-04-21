import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import OpenSource from "@/components/OpenSource";
import Blogs from "@/components/Blogs";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

const Index = () => {
  useEffect(() => {
    document.title = "Mayank Pagar — Software Engineer";
    document.documentElement.classList.add("dark");

    // Smooth scroll for in-page anchors, with offset for the fixed header.
    const handler = (e: Event) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="relative min-h-screen bg-[hsl(var(--bg))] text-[hsl(var(--text))]">
      <Analytics />
      <MagneticCursor />
      <GrainOverlay />
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <OpenSource />
        <Blogs />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
