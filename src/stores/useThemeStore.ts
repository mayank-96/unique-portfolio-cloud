
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'default' | 'purple' | 'ocean' | 'sunset';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'default',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
);
