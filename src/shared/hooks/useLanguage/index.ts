"use client";

import { useTranslation } from 'react-i18next';
import { useConfigStore } from '../useConfigStore';
import React, { useCallback, useEffect } from 'react';

const emptySubscribe = () => () => {};

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const { language: storedLanguage, setLanguage: setStoreLanguage } = useConfigStore();
  
  // Modern way to detect hydration without triggering synchronous cascading renders
  const isMounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const changeLanguage = useCallback(
    async (newLang: string) => {
      await i18n.changeLanguage(newLang);
      setStoreLanguage(newLang);
    },
    [i18n, setStoreLanguage]
  );

  // Sync i18n with store on mount or store change (e.g. from localStorage)
  useEffect(() => {
    if (isMounted && i18n.language !== storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n, storedLanguage, isMounted]);

  // If not mounted, return the "safe" server-side language (English)
  const language = isMounted ? storedLanguage : "en";

  return {
    language,
    changeLanguage,
    t: i18n.t.bind(i18n),
  };
};
