'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { useLanguage, useIntersectionObserver } from '@/shared/hooks';

export const DriverSplit = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section className="bg-background relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-4 py-24">
      <div
        ref={ref}
        className={`ease-out-fluid mx-auto flex w-full max-w-7xl flex-col items-center gap-16 transition-all duration-1000 md:flex-row ${
          isIntersecting
            ? 'translate-y-0 opacity-100'
            : 'translate-y-24 opacity-0'
        }`}
      >
        {/* Left Column: Typography */}
        <div className="z-10 flex w-full flex-col items-start text-left md:w-1/2">
          <div className="bg-accent/10 border-accent-soft-hover mb-8 inline-flex items-center rounded-full border px-3 py-1">
            <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
              {t('driverSplit.badge')}
            </span>
          </div>

          <h2 className="font-display text-foreground mb-8 text-5xl font-bold md:text-7xl">
            {t('driverSplit.title')}
          </h2>

          <p className="text-foreground/70 mb-12 max-w-lg text-lg leading-relaxed font-medium md:text-xl">
            {t('driverSplit.description')}
          </p>

          <ul className="mb-12 flex w-full max-w-sm flex-col gap-6">
            {[1, 2, 3].map((i) => (
              <li key={i} className="group flex items-center gap-4">
                <div className="bg-foreground/5 group-hover:bg-accent-soft-hover group-hover:text-accent flex h-8 w-8 items-center justify-center rounded-full transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-foreground/90 text-base font-semibold">
                  {t(`driverSplit.bullet${i}`)}
                </span>
              </li>
            ))}
          </ul>

          <Button className="group bg-foreground text-background inline-flex h-auto items-center gap-4 rounded-full px-8 py-4 text-lg font-bold transition-transform active:scale-[0.98]">
            {t('driverSplit.cta')}
            <div className="bg-background/20 flex h-8 w-8 items-center justify-center rounded-full transition-transform group-hover:translate-x-1 group-hover:-translate-y-px">
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
        </div>

        {/* Right Column: Physical Mockup Card (Double-Bezel) */}
        <div className="relative flex h-[600px] w-full items-center justify-center md:w-1/2">
          <div className="bg-accent/5 absolute inset-0 scale-105 -rotate-3 rounded-[3rem] blur-2xl transition-all duration-1000 ease-out"></div>

          <div className="bg-foreground/5 ring-foreground/10 ease-out-fluid relative h-full w-full max-w-md rotate-2 transform rounded-[2.5rem] p-2 shadow-2xl ring-1 backdrop-blur-md transition-transform duration-700 hover:rotate-0">
            <div className="bg-surface relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[calc(2.5rem-0.5rem)] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <div className="w-full">
                <div className="bg-accent text-accent-foreground shadow-accent/30 mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </svg>
                </div>
                <h3 className="font-display text-foreground mb-2 text-3xl font-bold tracking-tight">
                  $1,240.50
                </h3>
                <p className="text-foreground/50 text-sm font-medium">
                  This week&apos;s earnings
                </p>
              </div>

              <div className="w-full space-y-4">
                <div className="bg-foreground/5 h-16 w-full animate-pulse rounded-2xl"></div>
                <div
                  className="bg-foreground/5 h-16 w-full animate-pulse rounded-2xl"
                  style={{ animationDelay: '150ms' }}
                ></div>
                <div
                  className="bg-foreground/5 h-16 w-full animate-pulse rounded-2xl"
                  style={{ animationDelay: '300ms' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
