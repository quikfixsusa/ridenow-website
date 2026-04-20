'use client';

import React from 'react';
import { useLanguage, useIntersectionObserver } from '@/shared/hooks';

export const Features = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const featuresList = [
    {
      id: 'f1',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <polyline points="16 11 18 13 22 9"></polyline>
        </svg>
      ),
      colSpan: 'md:col-span-2',
    },
    {
      id: 'f2',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      colSpan: 'md:col-span-1',
    },
    {
      id: 'f3',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
      ),
      colSpan: 'md:col-span-1',
    },
    {
      id: 'f4',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      colSpan: 'md:col-span-2',
    },
  ];

  return (
    <section className="bg-background border-divider/40 relative w-full border-t px-4 py-32">
      <div ref={ref} className="mx-auto flex max-w-7xl flex-col items-center">
        <div
          className={`ease-out-fluid mb-20 text-center transition-all duration-1000 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <div className="bg-foreground/5 mb-6 inline-flex items-center rounded-full px-3 py-1">
            <span className="text-foreground/60 text-[10px] font-bold tracking-[0.2em] uppercase">
              {t('features.eyebrow')}
            </span>
          </div>
          <h2 className="font-display text-foreground text-4xl font-bold md:text-6xl">
            {t('features.title')}
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid w-full auto-rows-[minmax(280px,auto)] grid-cols-1 gap-6 md:grid-cols-3">
          {featuresList.map((feature, i) => (
            <div
              key={feature.id}
              className={`group bg-surface ring-divider ease-out-fluid flex flex-col justify-between rounded-[2rem] p-10 ring-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${feature.colSpan} ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="bg-foreground/5 text-foreground group-hover:bg-accent group-hover:text-accent-foreground mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300">
                {feature.icon}
              </div>

              <div className="mt-auto">
                <h3 className="font-display text-foreground mb-3 text-2xl font-bold tracking-tight">
                  {t(`features.${feature.id}Title`)}
                </h3>
                <p className="text-foreground/60 leading-relaxed font-medium">
                  {t(`features.${feature.id}Desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
