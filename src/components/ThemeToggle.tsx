
import { useThemeStore } from "@/stores/useThemeStore";
import { motion } from "framer-motion";
import { useState } from "react";

// Theme definitions
const themes = [
  { 
    name: 'default', 
    color: '#FF5277',
    hoverColor: '#ff7291'
  },
  { 
    name: 'purple', 
    color: '#9b87f5',
    hoverColor: '#b0a1f7'
  },
  { 
    name: 'ocean', 
    color: '#0EA5E9',
    hoverColor: '#38bdf8'
  },
  { 
    name: 'sunset', 
    color: '#F97316',
    hoverColor: '#fb923c'
  },
] as const;

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-1.5">
      {themes.map((t) => (
        <div 
          key={t.name}
          className="relative"
          onMouseEnter={() => setHoveredTheme(t.name)}
          onMouseLeave={() => setHoveredTheme(null)}
        >
          <motion.button
            className={`w-3 h-3 rounded-full border transition-transform ${
              theme === t.name ? 'scale-110 border-white/50' : 'border-transparent hover:scale-105'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: t.color,
              boxShadow: theme === t.name ? `0 0 5px ${t.color}` : 'none'
            }}
            onClick={() => setTheme(t.name)}
            aria-label={`Switch to ${t.name} theme`}
          />
          
          {hoveredTheme === t.name && (
            <motion.div
              className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-medium shadow-md pointer-events-none z-50"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              style={{ 
                borderLeft: `2px solid ${t.color}`
              }}
            >
              {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThemeToggle;
