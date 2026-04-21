'use client';

import React from 'react';
import { useLanguage } from '@/shared/hooks';

export const ServicesHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-16 text-center">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        <div className="animate-in fade-in slide-in-from-bottom-4 flex justify-center duration-1000">
          <span className="rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-foreground/60 uppercase backdrop-blur-sm">
            {t('servicesPage.hero.badge')}
          </span>
        </div>

        <h1 className="animate-in fade-in slide-in-from-bottom-8 font-display text-5xl font-semibold tracking-tight text-foreground duration-1000 md:text-8xl">
          {t('servicesPage.hero.title')}
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-12 mx-auto max-w-2xl text-lg text-foreground/60 duration-1000 md:text-2xl font-light leading-relaxed">
          {t('servicesPage.hero.subtitle')}
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-16 flex flex-col items-center justify-center gap-4 pt-4 duration-1000 sm:flex-row">
          <button className="group flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:scale-[1.02] active:scale-[0.98]">
            {t('servicesPage.hero.cta')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
