'use client';

import React from 'react';
import { useLanguage } from '@/shared/hooks';

export const Mission = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-foreground/5 relative w-full overflow-hidden px-4 py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row">
        <div className="flex-1 space-y-6">
          <div className="bg-primary h-1 w-20 rounded-full" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('about.mission.title')}
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed lg:text-xl">
            {t('about.mission.desc')}
          </p>
        </div>

        <div className="relative flex-1">
          {/* Decorative visuals for mission */}
          <div className="from-primary/30 to-background relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/50"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            {/* Quote or highlight */}
            <div className="bg-background/40 absolute right-8 bottom-8 left-8 rounded-2xl p-6 backdrop-blur-md">
              <p className="text-sm font-medium italic">
                &quot;{t('about.mission.quote')}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
