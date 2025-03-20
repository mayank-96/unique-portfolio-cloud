import React, { useEffect } from 'react';
import { PaintBucket } from 'lucide-react';
import { useThemeStore, generateRandomColor } from '@/stores/useThemeStore';

const ThemeColorButton = () => {
  const { primaryColor, changePrimaryColor, isDarkMode } = useThemeStore();
  
  // Apply the primary color to CSS variables when it changes
  useEffect(() => {
    // Update the CSS variable
    document.documentElement.style.setProperty('--primary', primaryColor);
    
    // Also update derived colors (like primary-foreground) if needed
    // This keeps the text readable against the new background color
    // No changes needed as our CSS variables already handle this well
  }, [primaryColor, isDarkMode]);
  
  const handleChangeColor = () => {
    const newColor = generateRandomColor();
    changePrimaryColor(newColor);
  };
  
  return (
    <button
      onClick={handleChangeColor}
      className="p-2 rounded-md border border-border hover:bg-muted transition-colors flex items-center gap-2"
      aria-label="Change theme color"
    >
      <PaintBucket size={18} className="text-primary" />
      <span className="text-xs font-medium">Color</span>
    </button>
  );
};

export default ThemeColorButton;
