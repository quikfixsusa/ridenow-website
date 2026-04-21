'use client';

import React from 'react';
import { useLanguage } from '@/shared/hooks';

export const ServicesCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-foreground w-full px-4 py-32 md:py-48 text-background overflow-hidden relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center relative z-10">
        <h2 className="mb-8 font-display text-5xl font-semibold tracking-tight md:text-8xl leading-[1.1]">
          {t('servicesPage.cta.title')}
        </h2>
        <p className="mb-12 max-w-xl text-xl text-background/60 md:text-2xl font-light">
          {t('servicesPage.cta.subtitle')}
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
            <button className="group flex items-center gap-3 rounded-full bg-background px-10 py-5 text-lg font-bold text-foreground transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20">
                {t('servicesPage.cta.button')}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                </svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
