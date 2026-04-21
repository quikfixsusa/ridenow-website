"use client";

import React from "react";
import { LegalPageTemplate } from "../components";
import { termsTranslation, privacyTranslation, cookiesTranslation } from "../translations";
import { useConfigStore } from "@/shared/hooks";

export const TermsPage = () => {
  const language = useConfigStore((state) => state.language) as "en" | "es";
  const content = termsTranslation[language];
  return <LegalPageTemplate {...content} />;
};

export const PrivacyPage = () => {
  const language = useConfigStore((state) => state.language) as "en" | "es";
  const content = privacyTranslation[language];
  return <LegalPageTemplate {...content} />;
};

export const CookiesPage = () => {
  const language = useConfigStore((state) => state.language) as "en" | "es";
  const content = cookiesTranslation[language];
  return <LegalPageTemplate {...content} />;
};
