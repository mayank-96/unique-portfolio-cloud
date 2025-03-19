
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { icon: Twitter, href: "https://twitter.com/mayankp09_", label: "Twitter" },
    { icon: Mail, href: "mailto:pagarmayank07@gmail.com", label: "Email" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full py-5 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-mono font-bold hover:text-primary transition-colors flex items-center">
            <span className="text-primary">Ctrl</span>
            <span className="text-foreground">Alt</span>
            <span className="text-primary">Mayank</span>
            <span className="text-xs align-top text-foreground/70">.com</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm uppercase tracking-wider hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            {/* Resume Button */}
            <a 
              href="https://example.com/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full flex items-center gap-2 hover:bg-primary/20 transition-colors"
            >
              <FileText size={16} />
              <span className="font-medium">Resume</span>
            </a>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-foreground p-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-background z-40 md:hidden flex flex-col"
        >
          <div className="container mx-auto px-4 py-5 flex justify-between items-center">
            <a href="#" className="text-xl font-mono font-bold">
              <span className="text-primary">Ctrl</span>
              <span className="text-foreground">Alt</span>
              <span className="text-primary">Mayank</span>
              <span className="text-xs align-top text-foreground/70">.com</span>
            </a>
            <button onClick={toggleMenu} className="text-foreground p-1">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col justify-center px-4">
            <nav className="mb-10">
              <ul className="space-y-6">
                {navLinks.map((link, index) => (
                  <li key={index} className="border-b border-border pb-4">
                    <a 
                      href={link.href} 
                      className="text-2xl font-anton uppercase tracking-wide hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="space-y-8">
              {/* Resume Button */}
              <div className="flex justify-center">
                <a 
                  href="https://example.com/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded-full flex items-center gap-2 hover:bg-primary/20 transition-colors"
                >
                  <FileText size={18} />
                  <span className="font-medium">Resume</span>
                </a>
              </div>
              
              <div className="flex justify-center gap-6">
                {socials.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} CtrlAltMayank.com | All rights reserved
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
