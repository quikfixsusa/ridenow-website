"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import en from "./locales/en.json";
import es from "./locales/es.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

const isServer = typeof window === "undefined";

const i18nInstance = i18n.use(initReactI18next);

// Only use LanguageDetector on the client
if (!isServer) {
  i18nInstance.use(LanguageDetector);
}

i18nInstance.init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["cookie", "localStorage", "navigator"],
    lookupCookie: "ridenow-lang",
    caches: ["cookie", "localStorage"],
  },
});


export default i18n;



