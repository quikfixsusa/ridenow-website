'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { useLanguage, useIntersectionObserver } from '@/shared/hooks';

export const Hero = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="bg-background relative flex min-h-[100dvh] w-full items-center overflow-hidden px-4 pt-32 pb-16">
      {/* Subtle background ambient mesh */}
      <div className="bg-accent/20 pointer-events-none absolute top-0 right-0 h-[50vw] w-[50vw] translate-x-1/4 -translate-y-1/2 rounded-full blur-[150px]"></div>

      <div
        ref={ref}
        className={`z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] lg:grid-cols-2 ${
          isIntersecting
            ? 'translate-y-0 opacity-100'
            : 'translate-y-12 opacity-0'
        }`}
      >
        {/* Left: Typography Block */}
        <div className="flex max-w-2xl flex-col items-start text-left">
          <h1 className="text-foreground mb-8 text-6xl leading-[0.95] font-black tracking-tighter md:text-8xl">
            <span className="block">{t('hero.title1')}</span>
            <span className="text-accent mt-2 block drop-shadow-sm">
              {t('hero.title2')}
            </span>
          </h1>

          <p className="text-foreground/70 mb-12 max-w-lg text-xl leading-relaxed font-medium md:text-2xl">
            {t('hero.subtitle')}
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button className="group bg-foreground text-background inline-flex h-auto items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-bold transition-transform active:scale-[0.98]">
              {t('hero.ctaPrimary')}
              <div className="bg-background/20 flex h-8 w-8 items-center justify-center rounded-full transition-transform group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </Button>
            <Button
              variant="outline"
              className="border-divider text-foreground hover:bg-foreground/5 h-auto rounded-full px-8 py-4 text-lg font-bold transition-colors"
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>
        </div>

        {/* Right: Mockup Image/Graphic (Double-Bezel) */}
        <div
          className={`relative flex h-[600px] w-full items-center justify-center transition-all delay-300 duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] lg:justify-end ${
            isIntersecting
              ? 'translate-x-0 opacity-100'
              : 'translate-x-12 opacity-0'
          }`}
        >
          {/* Outer Shell */}
          <div className="bg-foreground/5 ring-foreground/10 relative flex h-full max-h-[640px] w-full max-w-[320px] flex-col items-center justify-center rounded-[3rem] p-2 shadow-2xl ring-1 backdrop-blur-3xl">
            {/* Inner Core */}
            <div className="bg-surface border-divider relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[calc(3rem-0.5rem)] border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <div className="bg-accent text-accent-foreground flex h-24 w-24 animate-pulse items-center justify-center rounded-full shadow-[0_0_40px_rgba(255,200,0,0.5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
