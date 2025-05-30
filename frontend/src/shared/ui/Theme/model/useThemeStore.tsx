import { create } from "zustand";
import { TehemeStore, Theme } from "./types";

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return 'light';
};

export const useThemeStore = create<TehemeStore>((set) => {
    const initial = getInitialTheme();
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add(initial);
    }
  
    return {
      theme: initial,
      toggleTheme: () =>
        set((state) => {
          const next = state.theme === 'light' ? 'dark' : 'light';
          document.documentElement.classList.remove(state.theme);
          document.documentElement.classList.add(next);
          localStorage.setItem('theme', next);
          return { theme: next };
        }),
      setTheme: (theme) => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
        set({ theme });
      },
    }
  });