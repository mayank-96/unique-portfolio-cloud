
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "@/stores/useThemeStore";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const { theme, isDarkMode } = useThemeStore();

  // Get primary color based on theme
  const getThemeColor = () => {
    switch (theme) {
      case 'purple':
        return '#9b87f5';
      case 'ocean':
        return '#0EA5E9';
      case 'sunset':
        return '#F97316';
      default:
        return '#FF5277';
    }
  };
  
  // More subtle and elegant cursor
  const cursorSize = linkHovered ? 24 : 18;
  const dotSize = 6;
  const primaryColor = getThemeColor();
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  // Hide default cursor only on desktop
  useEffect(() => {
    // Only apply custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      document.body.style.cursor = 'none';
    }
    
    // Handle touch devices
    const handleTouchStart = () => {
      document.body.style.cursor = 'auto';
    };
    
    window.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  // Only render the custom cursor on non-touch devices
  if (typeof window !== 'undefined' && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot - smaller and more subtle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
        style={{
          backgroundColor: isDarkMode ? '#ffffff' : primaryColor,
          width: dotSize,
          height: dotSize,
          opacity: 0.9,
        }}
        animate={{
          x: position.x - dotSize / 2,
          y: position.y - dotSize / 2,
          scale: clicked ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.3,
        }}
      />

      {/* Secondary cursor ring - thinner and more elegant */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-40"
        style={{
          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : primaryColor,
          width: cursorSize,
          height: cursorSize,
          borderWidth: 1,
          opacity: 0.6,
        }}
        animate={{
          x: position.x - cursorSize / 2,
          y: position.y - cursorSize / 2,
          scale: clicked ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;
