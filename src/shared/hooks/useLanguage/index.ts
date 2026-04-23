"use client";

import { useTranslation } from 'react-i18next';
import { useConfigStore } from '../useConfigStore';
import React, { useCallback, useEffect } from 'react';
import Cookies from 'js-cookie';

const emptySubscribe = () => () => {};

export const useLanguage = () => {
  const { i18n, t } = useTranslation();
  const { language: storedLanguage, setLanguage: setStoreLanguage } = useConfigStore();
  
  const isMounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const changeLanguage = useCallback(
    async (newLang: string) => {
      await i18n.changeLanguage(newLang);
      setStoreLanguage(newLang);
      Cookies.set('ridenow-lang', newLang, { expires: 365 });
    },
    [i18n, setStoreLanguage]
  );

  useEffect(() => {
    if (isMounted && i18n.language !== storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n, storedLanguage, isMounted]);

  // Use i18n.language as fallback during SSR/hydration to match the server-side state
  const language = isMounted ? storedLanguage : (i18n.language || "en");

  return {
    language,
    changeLanguage,
    t,
  };
};


