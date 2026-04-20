"use client";

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type ThemeState = 'light' | 'dark';

interface ConfigState {
  language: string;
  theme: ThemeState;
  setLanguage: (lang: string) => void;
  setTheme: (theme: ThemeState) => void;
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      language: 'en',
      theme: 'light',
      setLanguage: (lang) => set({ language: lang }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'ridenow-config', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
