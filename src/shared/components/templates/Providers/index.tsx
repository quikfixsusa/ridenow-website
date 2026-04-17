"use client";

import React from "react";
import "@/shared/services/i18n"; // Initialize i18n

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <>{children}</>;
};
