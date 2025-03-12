
import { useThemeStore } from "@/stores/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";
import { Paintbrush, X } from "lucide-react";
import { useState } from "react";

const themes = [
  { name: 'default', color: '#FF5277', label: 'Default' },
  { name: 'purple', color: '#9b87f5', label: 'Purple' },
  { name: 'ocean', color: '#0EA5E9', label: 'Ocean' },
  { name: 'sunset', color: '#F97316', label: 'Sunset' },
] as const;

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      {/* Main toggle button */}
      <motion.button
        className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
        aria-label={isOpen ? "Close theme selector" : "Open theme selector"}
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <Paintbrush size={20} />
            <motion.div 
              className="absolute w-full h-full rounded-full"
              animate={{ 
                boxShadow: "0 0 0 rgba(var(--primary), 0.4)",
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                repeatType: "reverse" 
              }}
            />
          </>
        )}
      </motion.button>

      {/* Theme options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute bottom-16 right-0 bg-card border border-border rounded-lg shadow-lg p-3 mb-2"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="text-center mb-2 font-medium">Select Theme</div>
            <div className="grid grid-cols-2 gap-2 w-48">
              {themes.map((t) => (
                <motion.button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name);
                    setIsOpen(false);
                  }}
                  className={`
                    flex flex-col items-center justify-center p-3 rounded-lg transition-all
                    ${theme === t.name ? 'ring-2 ring-primary scale-105' : 'hover:bg-accent'}
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="w-8 h-8 rounded-full mb-1"
                    style={{ backgroundColor: t.color }}
                    animate={{ 
                      boxShadow: theme === t.name 
                        ? ['0 0 8px ' + t.color, '0 0 2px ' + t.color] 
                        : '0 0 0px ' + t.color
                    }}
                    transition={{ duration: 1.5, repeat: theme === t.name ? Infinity : 0, repeatType: "reverse" }}
                  />
                  <span className="text-xs">{t.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemeSwitcher;
