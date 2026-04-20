"use client";

import React, { useEffect } from "react";
import "@/shared/services/i18n"; // Initialize i18n
import { useConfigStore } from "@/shared/hooks";

interface ProvidersProps {
  children: React.ReactNode;
}

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

  // Ensure initial suppression of hydration mismatch by only rendering after mount if needed,
  // but for pure providers, just returning children is fine since CSS takes care of initial mismatch mostly.
  return <>{children}</>;
};
