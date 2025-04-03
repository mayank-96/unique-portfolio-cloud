
import React, { useEffect, useRef } from "react";
import { ArrowRight, Code, Terminal, Layers, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scene = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!scene.current) return;
      
      const { left, top, width, height } = scene.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const elements = scene.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth') || '0');
        const translateX = x * depth * 30;
        const translateY = y * depth * 30;
        const rotateX = y * depth * 10;
        const rotateY = -x * depth * 10;
        
        (el as HTMLElement).style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-glow-top"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-glow-bottom"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-col space-y-3">
              <Badge variant="glass" className="w-fit animate-fade-in">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse"></span>
                  Software Engineer
                </span>
              </Badge>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-anton tracking-tight leading-none"
              >
                <span className="heading-gradient">Ctrl+Alt+</span>
                <span className="text-white">Mayank</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl font-sora text-white/70"
              >
                Your development <span className="text-neon-blue">keyboard shortcut</span>
              </motion.p>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-white/60 max-w-2xl"
            >
              I build exceptional digital experiences with clean, efficient code. 
              Specializing in React, React Native, and TypeScript to create 
              elegant solutions for complex problems.
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              {[
                { icon: Code, text: "Frontend Dev", color: "purple" },
                { icon: Terminal, text: "Clean Code", color: "blue" },
                { icon: Layers, text: "UI/UX Design", color: "pink" },
                { icon: Database, text: "API Integration", color: "purple" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                >
                  <div className="glass-card flex flex-col items-center p-4 h-full">
                    <div className={`p-2 rounded-lg bg-neon-${item.color}/10 mb-2`}>
                      <item.icon className={`text-neon-${item.color}`} size={20} />
                    </div>
                    <span className="text-sm text-white/80">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <a 
                href="#contact" 
                className="futuristic-button flex items-center justify-center gap-2 group"
              >
                Contact Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className="backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-all hover:border-white/20 hover:bg-white/5"
              >
                Explore Projects
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div ref={scene} className="relative w-full h-[400px] sm:h-[500px] perspective-500">
              {/* 3D Scene */}
              <div 
                className="parallax-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rotateY-20 rotateX-20"
                data-depth="0.5"
              >
                <div className="futuristic-card h-full w-full p-6 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-neon-purple/10 rounded-full">
                      <Terminal className="text-neon-purple" size={24} />
                    </div>
                    <p className="text-sm font-mono opacity-70 pt-1.5">developer.ts</p>
                  </div>
                  
                  <div className="font-mono text-sm">
                    <div className="mb-3">
                      <span className="text-neon-purple">interface</span> <span className="text-neon-blue">Developer</span> {"{"}
                    </div>
                    
                    <div className="pl-6 space-y-1">
                      <div>
                        <span className="text-neon-pink">name</span>: <span className="text-green-400">string</span>;
                      </div>
                      <div>
                        <span className="text-neon-pink">title</span>: <span className="text-green-400">string</span>;
                      </div>
                      <div>
                        <span className="text-neon-pink">location</span>: <span className="text-green-400">string</span>;
                      </div>
                      <div>
                        <span className="text-neon-pink">skills</span>: <span className="text-green-400">string</span>[];
                      </div>
                      <div>
                        <span className="text-neon-pink">website</span>: <span className="text-green-400">string</span>;
                      </div>
                      <div>
                        <span className="text-neon-pink">tagline</span>: <span className="text-green-400">string</span>;
                      </div>
                    </div>
                    
                    <div className="mt-3">{"}"}</div>
                    
                    <div className="mt-6">
                      <span className="text-neon-purple">const</span> <span className="text-neon-blue">mayank</span>: <span className="text-neon-blue">Developer</span> = {"{"}
                    </div>
                    
                    <div className="pl-6 space-y-1">
                      <div>
                        <span className="text-neon-pink">name</span>: <span className="text-yellow-300">'Mayank Pagar'</span>,
                      </div>
                      <div>
                        <span className="text-neon-pink">title</span>: <span className="text-yellow-300">'Software Engineer'</span>,
                      </div>
                      <div>
                        <span className="text-neon-pink">location</span>: <span className="text-yellow-300">'Pune, India'</span>,
                      </div>
                      <div>
                        <span className="text-neon-pink">skills</span>: [
                      </div>
                      <div className="pl-6">
                        <span className="text-yellow-300">'React'</span>,{" "}
                        <span className="text-yellow-300">'React Native'</span>,{" "}
                        <span className="text-yellow-300">'TypeScript'</span>,
                      </div>
                      <div>
                        ],
                      </div>
                      <div>
                        <span className="text-neon-pink">website</span>: <span className="text-yellow-300">'ctrlaltmayank.com'</span>,
                      </div>
                      <div>
                        <span className="text-neon-pink">tagline</span>: <span className="text-yellow-300">'Your development keyboard shortcut'</span>
                      </div>
                    </div>
                    
                    <div className="mt-3">{"};"}</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div 
                className="parallax-element absolute top-[5%] right-[10%] w-16 h-16 animate-float-slow"
                data-depth="0.8"
              >
                <div className="sphere"></div>
              </div>
              
              <div 
                className="parallax-element absolute bottom-[15%] left-[5%] w-20 h-20 animate-float-slow"
                data-depth="0.6"
              >
                <div className="hexagon"></div>
              </div>
              
              <div 
                className="parallax-element absolute -bottom-[10%] right-[15%] w-20 h-20 animate-float-slow opacity-80"
                data-depth="0.4"
              >
                <div className="w-full h-full">
                  <div className="cube">
                    <div className="cube-face cube-front bg-neon-blue/50"></div>
                    <div className="cube-face cube-back bg-neon-blue/30"></div>
                    <div className="cube-face cube-right bg-neon-blue/40"></div>
                    <div className="cube-face cube-left bg-neon-blue/40"></div>
                    <div className="cube-face cube-top bg-neon-blue/60"></div>
                    <div className="cube-face cube-bottom bg-neon-blue/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Mouse scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
        </div>
        <span className="text-xs text-white/40 mt-2 font-mono">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
