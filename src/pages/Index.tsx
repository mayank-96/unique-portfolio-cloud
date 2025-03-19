
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blogs from "@/components/Blogs";
import TechTalks from "@/components/TechTalks";
import Hobbies from "@/components/Hobbies";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "CtrlAltMayank.com | Your development keyboard shortcut";
    
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
  }, []);
  
  return (
    <div className="bg-background relative">
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
        <TechTalks />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-lg hidden md:flex items-center justify-center hover:shadow-xl transition-all z-20"
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
