"use client";

import React, { useEffect, Suspense } from "react";
import "@/shared/services/i18n"; // Initialize i18n
import { useConfigStore } from "@/shared/hooks";
import { useSearchParams } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Listener component for language search parameters.
 * Updates the global config store when 'lang' or 'language' is present in the URL.
 */
const LanguageSearchParamsHandler = () => {
  const searchParams = useSearchParams();
  const setLanguage = useConfigStore((state) => state.setLanguage);
  const currentLanguage = useConfigStore((state) => state.language);

  useEffect(() => {
    const lang = searchParams.get("lang") || searchParams.get("language");
    
    // Only update if the language is different and supported
    if (lang && lang !== currentLanguage && ["en", "es"].includes(lang)) {
      setLanguage(lang);
    }
  }, [searchParams, setLanguage, currentLanguage]);

  return null;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const theme = useConfigStore((state) => state.theme);

  useEffect(() => {
    // Add or remove dark mode manually
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, [theme]);

  return (
    <>
      <Suspense fallback={null}>
        <LanguageSearchParamsHandler />
      </Suspense>
      {children}
    </>
  );
};
