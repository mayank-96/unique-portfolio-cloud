
import { Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const northernLightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (northernLightsRef.current) {
      const { x, y } = mousePosition;
      const xOffset = (x - 50) * 0.02;
      const yOffset = (y - 50) * 0.02;
      northernLightsRef.current.style.transform = `translate(${xOffset}rem, ${yOffset}rem)`;
    }
  }, [mousePosition]);

  return (
    <section id="hero" className="relative pt-32 pb-16 md:py-32 overflow-hidden">
      {/* Northern Lights Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          ref={northernLightsRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ 
            filter: "blur(80px)",
            opacity: 0.4,
            willChange: "transform"
          }}
        >
          <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] rounded-full bg-[#8B5CF6] opacity-70"></div>
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[40%] rounded-full bg-[#0EA5E9] opacity-60"></div>
          <div className="absolute top-[5%] right-[15%] w-[45%] h-[40%] rounded-full bg-[#F2FCE2] opacity-30"></div>
          <div className="absolute bottom-[10%] left-[25%] w-[50%] h-[50%] rounded-full bg-[#D3E4FD] opacity-50"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 font-mono text-sm uppercase tracking-wider animate-fade-in">
              <span className="bg-primary/10 px-3 py-1 rounded-full text-primary">CtrlAltMayank.com</span>
              <span className="text-muted-foreground">Your development keyboard shortcut</span>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -left-4 text-[180px] font-anton text-primary/10 animate-fade-in delay-300">
                &lt;/&gt;
              </div>
              
              <h1 className="text-6xl md:text-8xl font-anton uppercase tracking-tight leading-none relative z-10">
                <span className="block animate-slide-left">Front</span>
                <span className="block animate-slide-right">End</span>
                <span className="block text-primary animate-slide-left delay-200">Developer</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mt-8 animate-fade-in delay-400">
              I'm a dedicated software engineer with experience in building applications for web and mobile platforms. 
              My passion for software lies with dreaming up ideas and making them come true with elegant pixel-perfect interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-in delay-500">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary text-white font-medium uppercase tracking-wide inline-flex items-center transition-transform hover:translate-y-[-2px] rounded-md shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 border border-foreground/80 bg-transparent text-foreground font-medium uppercase tracking-wide transition-all hover:bg-foreground/5 hover:translate-y-[-2px] rounded-md"
              >
                View Work
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative animate-fade-in delay-300">
            <div className="bg-background/70 backdrop-blur-sm p-6 lg:p-8 rounded-lg shadow-lg relative z-10 border border-primary/10 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Code className="text-primary" size={24} />
                </div>
                <p className="text-sm font-mono opacity-70 pt-1.5">developer.profile</p>
              </div>
              
              <div className="font-mono text-sm">
                <div className="mb-3">
                  <span className="text-primary">const</span> <span className="text-blue-600">developer</span> = {"{"}
                </div>
                
                <div className="pl-6 space-y-1">
                  <div>
                    <span className="text-orange-600">name</span>: <span className="text-green-600">'Mayank Pagar'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600">title</span>: <span className="text-green-600">'Software Engineer'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600">location</span>: <span className="text-green-600">'Pune, India'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600">skills</span>: [
                  </div>
                  <div className="pl-6">
                    <span className="text-green-600">'React'</span>,{" "}
                    <span className="text-green-600">'React Native'</span>,{" "}
                    <span className="text-green-600">'TypeScript'</span>,
                  </div>
                  <div className="pl-6">
                    <span className="text-green-600">'UI/UX'</span>,{" "}
                    <span className="text-green-600">'Problem Solving'</span>
                  </div>
                  <div>
                    ],
                  </div>
                  <div>
                    <span className="text-orange-600">website</span>: <span className="text-green-600">'ctrlaltmayank.com'</span>,
                  </div>
                  <div>
                    <span className="text-orange-600">tagline</span>: <span className="text-green-600">'Your development keyboard shortcut'</span>
                  </div>
                </div>
                
                <div className="mt-3">{"}"}</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-lg -z-10 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
