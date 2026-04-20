'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { useLanguage, useIntersectionObserver } from '@/shared/hooks';
import Image from 'next/image';

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

          <Button className="group bg-foreground text-background inline-flex h-auto items-center gap-4 rounded-full px-8 py-4 text-lg font-medium transition-transform active:scale-[0.98]">
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
        <Image
          src={require('../../../../../../public/images/earns-mockup.png')}
          alt="Driver Mockup"
          className="ease-out-fluid relative h-full w-full max-w-md rotate-2 transform rounded-[2.5rem] shadow-2xl backdrop-blur-md transition-transform duration-700 hover:rotate-0"
        />
      </div>
    </section>
  );
};
