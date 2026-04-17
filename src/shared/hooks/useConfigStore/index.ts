"use client";

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ConfigState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'ridenow-config', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
