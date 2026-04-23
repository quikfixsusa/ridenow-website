"use client";

import React, { useEffect, Suspense, useRef } from "react";
import i18n from "@/shared/services/i18n"; // Initialize i18n
import { useConfigStore } from "@/shared/hooks";
import { useSearchParams } from "next/navigation";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import Cookies from "js-cookie";

interface ProvidersProps {
  children: React.ReactNode;
  initialLang?: string;
}

/**
 * Syncs the Zustand theme with the next-themes state.
 */
const ThemeSync = () => {
  const { theme } = useTheme();
  const setThemeStore = useConfigStore((state) => state.setTheme);

  useEffect(() => {
    if (theme === "dark" || theme === "light") {
      setThemeStore(theme);
    }
  }, [theme, setThemeStore]);

  return null;
};

/**
 * Listener component for language search parameters.
 */
const LanguageSearchParamsHandler = () => {
  const searchParams = useSearchParams();
  const setLanguage = useConfigStore((state) => state.setLanguage);
  const currentLanguage = useConfigStore((state) => state.language);

  useEffect(() => {
    const lang = searchParams.get("lang") || searchParams.get("language");
    
    if (lang && lang !== currentLanguage && ["en", "es"].includes(lang)) {
      setLanguage(lang);
      i18n.changeLanguage(lang);
      Cookies.set("ridenow-lang", lang, { expires: 365 });
    }
  }, [searchParams, setLanguage, currentLanguage]);

  return null;
};

export const Providers: React.FC<ProvidersProps> = ({ children, initialLang }) => {
  const setLanguage = useConfigStore((state) => state.setLanguage);
  const theme = useConfigStore((state) => state.theme);
  const isInitialized = useRef(false);

  // Synchronous language sync for SSR/Hydration matching
  // This must happen before any child component (like Header) renders and calls useTranslation
  if (initialLang && i18n.language !== initialLang) {
    i18n.changeLanguage(initialLang);
  }


  // Update store and cookies on mount
  useEffect(() => {
    if (initialLang && !isInitialized.current) {
      setLanguage(initialLang);
      Cookies.set("ridenow-lang", initialLang, { expires: 365 });
      isInitialized.current = true;
    }
  }, [initialLang, setLanguage]);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={theme}
      enableSystem={false}
      disableTransitionOnChange
    >
      <ThemeSync />
      <Suspense fallback={null}>
        <LanguageSearchParamsHandler />
      </Suspense>
      {children}
    </NextThemesProvider>
  );
};




