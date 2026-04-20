'use client';

import React from 'react';
import { useLanguage } from '@/shared/hooks';

export const AboutHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background blobs for premium feel */}
      <div className="bg-primary/20 absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[120px]" />
      <div className="bg-primary/10 absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full blur-[100px]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <span className="text-primary mb-4 text-sm font-bold tracking-[0.2em] uppercase">
          RideNow
        </span>
        <h1 className="text-foreground mb-6 text-5xl font-black tracking-tight sm:text-7xl">
          {t('about.hero.title')}
        </h1>
        <p className="text-foreground/70 max-w-2xl text-lg leading-relaxed sm:text-xl">
          {t('about.hero.subtitle')}
        </p>
      </div>

      {/* Decorative element */}
      <div className="border-foreground/10 absolute bottom-0 h-24 w-px border-l border-dashed" />
    </section>
  );
};

export default AboutHero;
