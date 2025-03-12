
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Menu, X } from "lucide-react";
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

  const menuVariants = {
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      } 
    },
    closed: { 
      opacity: 0, 
      x: "100%",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      } 
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Open Source", href: "#opensource" },
    { name: "Contact", href: "#contact" }
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
        "fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-mono font-bold text-foreground">
          <span className="text-primary">M</span>ayank<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="relative font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                aria-label={social.label}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className="fixed top-0 right-0 h-full w-[80%] bg-background shadow-xl md:hidden z-50"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={toggleMenu} className="text-foreground">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-8 flex-grow">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-lg font-medium text-foreground"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto">
              <div className="flex items-center gap-6 mb-4">
                {socials.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Mayank Pagar
              </p>
            </div>
          </nav>
        </div>
      </motion.div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
