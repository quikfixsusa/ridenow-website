"use client";

import { useTranslation } from 'react-i18next';
import { useConfigStore } from '../useConfigStore';
import { useCallback, useEffect } from 'react';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const { language, setLanguage: setStoreLanguage } = useConfigStore();

  const changeLanguage = useCallback(
    async (newLang: string) => {
      await i18n.changeLanguage(newLang);
      setStoreLanguage(newLang);
    },
    [i18n, setStoreLanguage]
  );

  // Sync i18n with store on mount or store change (e.g. from localStorage)
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);

  return {
    language,
    changeLanguage,
    t: i18n.t.bind(i18n),
  };
};
