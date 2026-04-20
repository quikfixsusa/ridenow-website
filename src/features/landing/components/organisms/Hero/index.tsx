'use client';

import React from 'react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useLanguage, useIntersectionObserver } from '@/shared/hooks';
import Image from 'next/image';

const AppleIcon = () => (
  <svg viewBox="0 0 512 512" className="h-7 w-7" fill="currentColor">
    <g id="Capa_1-2" data-name="Capa 1">
      <g>
        <path d="M404.73,272.06c-.75-65.03,56.8-96.42,59.05-97.91-32.14-44.1-82.96-50.08-100.16-50.83-41.86-4.48-82.96,23.92-104.64,23.92s-55.31-23.17-90.44-22.42c-45.59,.75-88.94,25.41-112.11,64.28-48.58,78.48-12.71,194.33,34.38,257.86,23.17,31.39,50.08,65.77,85.95,65.03,35.13-1.49,47.84-20.93,89.69-20.93s53.81,20.93,90.44,20.18c37.37-.75,61.29-31.39,83.71-62.78,26.91-35.88,37.37-71.01,38.12-72.5-1.49-.75-73.25-26.16-74-103.89Zm-68.76-189.85C354.65,60.54,367.35,30.64,363.62,0c-26.91,.75-61.29,17.19-80.72,38.87-17.19,18.69-32.89,50.08-28.4,79.23,30.64,2.24,62.04-14.95,81.47-35.88Z" />
      </g>
    </g>
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 512 512" className="h-7 w-7" fill="currentColor">
    <g id="Capa_1-2" data-name="Capa 1">
      <g>
        <g>
          <path d="M270.27,255.41L14.23,15.89c-2.25,6.01-4.51,12.01-4.51,20.27V476.92c0,8.26,2.25,14.27,4.51,20.27L270.27,255.41Z" />
          <path d="M300.3,255.41l85.6,79.59,93.86-49.56c30.03-15.77,30.03-42.05,0-57.82l-96.11-51.81-83.34,79.59Z" />
          <path d="M285.28,241.15l78.84-75.84L63.03,6.13C50.27,.13,37.5-2.13,29.24,2.38L285.28,241.15Z" />
          <path d="M285.28,268.93L29.24,509.95c8.26,3.75,21.02,2.25,36.04-3.75l302.59-159.18-82.59-78.09Z" />
        </g>
      </g>
    </g>
  </svg>
);

export const Hero = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="bg-background relative flex min-h-dvh w-full items-center overflow-hidden px-4 pt-32 pb-16">
      {/* Subtle background ambient mesh */}
      <div className="bg-accent-soft-hover pointer-events-none absolute top-0 right-0 h-[50vw] w-[50vw] translate-x-1/4 -translate-y-1/2 rounded-full blur-[150px]"></div>

      <div
        ref={ref}
        className={`ease-out-fluid z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 transition-all duration-1000 lg:grid-cols-2 ${
          isIntersecting
            ? 'translate-y-0 opacity-100'
            : 'translate-y-12 opacity-0'
        }`}
      >
        {/* Left: Typography Block */}
        <div className="flex max-w-2xl flex-col items-start text-left">
          <h1 className="text-foreground font-display mb-8 text-5xl leading-[0.95] font-black md:text-8xl">
            <span className="block">{t('hero.title1')}</span>
            <span className="block">{t('hero.title2')}</span>
            <span className="text-accent mt-2 block drop-shadow-sm">
              {t('hero.title3')}
            </span>
          </h1>

          <p className="text-foreground/70 mb-12 max-w-lg text-xl leading-relaxed font-medium md:text-2xl">
            {t('hero.subtitle')}
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="https://apps.apple.com/us/app/id6742415073"
              target="_blank"
            >
              <Button className="group bg-foreground text-background inline-flex h-auto items-center justify-center gap-4 rounded-3xl px-8 pt-2.5 pb-2 text-lg font-medium transition-transform active:scale-[0.98]">
                <AppleIcon />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-normal tracking-wider uppercase opacity-80">
                    {t('hero.downloadOn')}
                  </span>
                  <span className="mt-[-4px] text-lg font-bold">
                    {t('hero.appStore')}
                  </span>
                </div>
              </Button>
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.ridenow.taxi"
              target="_blank"
            >
              <Button
                variant="outline"
                className="border-foreground/10 hover:bg-foreground/5 text-foreground inline-flex h-auto items-center justify-center gap-4 rounded-3xl px-8 pt-2.5 pb-2 text-lg font-medium transition-colors active:scale-[0.98]"
              >
                <PlayStoreIcon />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-normal tracking-wider uppercase opacity-80">
                    {t('hero.getItOn')}
                  </span>
                  <span className="mt-[-4px] text-lg font-bold">
                    {t('hero.googlePlay')}
                  </span>
                </div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Mockup Image/Graphic (Double-Bezel) */}
        <div className="flex items-end justify-end">
          <Image
            src={require('../../../../../../public/images/mockup-home.png')}
            alt="Hero Mockup"
            className={`ease-out-fluid relative flex h-[650px] w-auto items-center justify-center transition-all delay-300 duration-1000 lg:justify-end ${
              isIntersecting
                ? 'translate-x-0 opacity-100'
                : 'translate-x-12 opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  );
};
