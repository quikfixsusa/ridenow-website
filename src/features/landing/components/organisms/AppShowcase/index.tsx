'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { useLanguage, useIntersectionObserver } from '@/shared/hooks';

export const AppShowcase = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section className="bg-background relative w-full px-4 py-32">
      <div
        ref={ref}
        className={`bg-foreground ease-out-fluid relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-[3rem] px-6 pt-24 pb-0 text-center shadow-2xl transition-all duration-1000 md:px-24 ${
          isIntersecting
            ? 'translate-y-0 opacity-100'
            : 'translate-y-16 opacity-0'
        }`}
      >
        {/* Ambient background glow inside the container */}
        <div className="bg-accent-soft-hover pointer-events-none absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"></div>

        <h2 className="font-display text-background relative z-10 mb-8 max-w-3xl text-4xl font-bold md:text-6xl">
          {t('appShowcase.title')}
        </h2>

        <p className="text-background/70 relative z-10 mb-16 max-w-2xl text-xl leading-relaxed font-medium md:text-2xl">
          {t('appShowcase.description')}
        </p>

        {/* Mockup Placeholder */}
        <div className="bg-surface relative mt-8 flex h-[400px] w-full max-w-4xl flex-col overflow-hidden rounded-t-[2.5rem] border-b-0 shadow-2xl ring-1 ring-white/10 md:h-[600px]">
          {/* Header Bar */}
          <div className="bg-foreground/5 flex h-16 w-full items-center border-b border-white/5 px-6">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-white/20"></div>
              <div className="h-3 w-3 rounded-full bg-white/20"></div>
              <div className="h-3 w-3 rounded-full bg-white/20"></div>
            </div>
          </div>

          <div className="relative flex h-full w-full flex-col gap-6 p-8">
            <div className="bg-foreground/5 relative h-48 w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 flex -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
            </div>

            <div className="grid h-full grid-cols-2 gap-6">
              <div className="bg-foreground/5 rounded-2xl"></div>
              <div className="bg-foreground/5 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
