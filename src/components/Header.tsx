
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, Menu, X, FileText, Terminal, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/stores/useThemeStore";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Works", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/mayank-96", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mayank-pagar", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mayankp09_", label: "Twitter" },
    { icon: Mail, href: "mailto:pagarmayank07@gmail.com", label: "Email" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full py-5 z-50 transition-all duration-300",
        isScrolled ? "bg-futuristic-dark/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-mono font-bold text-white hover:text-neon-purple transition-colors flex items-center gap-1.5">
            <div className="flex items-center justify-center p-1.5 bg-neon-purple/10 rounded text-neon-purple">
              <Terminal size={18} className="animate-pulse" />
            </div>
            <div className="flex items-baseline">
              <span className="text-white">Mayank</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm uppercase font-mono tracking-wider text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-neon-purple after:to-neon-blue after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleDarkMode}
              className="flex items-center gap-2 p-2 rounded-md border border-white/10 bg-futuristic-accent/30 hover:bg-futuristic-accent/50 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-neon-purple" />
              )}
              <span className="text-xs font-medium text-white/80">
                {isDarkMode ? "Light" : "Dark"}
              </span>
            </button>
            
            <a 
              href="/mayank-pagar-resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded-md flex items-center gap-2 hover:bg-neon-purple/20 transition-colors backdrop-blur-sm"
            >
              <FileText size={16} />
              <span className="font-medium">Resume</span>
            </a>
            
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-neon-blue transition-colors p-1.5 bg-futuristic-accent/30 rounded-md hover:bg-futuristic-accent/50"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-1.5 rounded-md bg-futuristic-accent/30"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-neon-purple" />
              )}
            </button>
            
            <button 
              className="text-white p-1.5 bg-futuristic-accent/30 rounded-md"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-futuristic-dark/90 backdrop-blur-lg z-40 md:hidden flex flex-col"
          >
            <div className="container mx-auto px-4 py-5 flex justify-between items-center border-b border-white/10">
              <a href="#" className="text-xl font-mono font-bold text-white flex items-center gap-1.5">
                <div className="flex items-center justify-center p-1.5 bg-neon-purple/10 rounded text-neon-purple">
                  <Terminal size={18} />
                </div>
                <div className="flex items-baseline">
                  <span className="text-white">Mayank</span>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleDarkMode}
                  className="p-1.5 rounded-md bg-futuristic-accent/30"
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkMode ? (
                    <Sun size={18} className="text-yellow-400" />
                  ) : (
                    <Moon size={18} className="text-neon-purple" />
                  )}
                </button>
                
                <button 
                  onClick={toggleMenu} 
                  className="text-white p-1.5 bg-futuristic-accent/30 rounded-md"
                >
                  <X size={22} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-4">
              <nav className="mb-10">
                <ul className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={index} 
                      className="border-b border-white/10 pb-4"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <a 
                        href={link.href} 
                        className="text-2xl font-anton uppercase tracking-wide text-white hover:text-neon-purple transition-colors"
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <a 
                    href="/mayank-pagar-resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="futuristic-button px-6 py-3 flex items-center gap-2"
                  >
                    <FileText size={18} />
                    <span className="font-medium">Resume</span>
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex justify-center gap-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  {socials.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-neon-blue transition-colors p-2 bg-futuristic-accent/30 rounded-md hover:bg-futuristic-accent/50"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </motion.div>
                <motion.p 
                  className="text-center text-sm text-white/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  &copy; {new Date().getFullYear()} Ctrl+Alt+Mayank | All rights reserved
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
