
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Set initial mouse position to center of screen
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });
    
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Update document title
    document.title = "Mayank Pagar | Software Engineer";
    
    // Apply staggered animation to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.1}s`;
      section.classList.add('staggered-appear');
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Cursor follower (decorative) */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-primary/10 z-[5] pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          transition: { duration: 0.05, ease: "linear" }
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
      />
      
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hidden md:flex items-center justify-center hover:bg-primary/90 transition-all z-20"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
