"use client";

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type ThemeState = 'light' | 'dark';

interface ConfigState {
  language: string;
  theme: ThemeState;
  country: string;
  setLanguage: (lang: string) => void;
  setTheme: (theme: ThemeState) => void;
  setCountry: (country: string) => void;
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      language: 'en',
      theme: 'light',
      country: 'US',
      setLanguage: (lang) => set({ language: lang }),
      setTheme: (theme) => set({ theme }),
      setCountry: (country) => set({ country }),
    }),
    {
      name: 'ridenow-config', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
