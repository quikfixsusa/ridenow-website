'use client';

import React from 'react';
import { useLanguage } from '@/shared/hooks';

export const ServicesDetail = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'shared',
      title: t('about.services.shared.title'),
      desc: t('about.services.shared.desc'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      id: 'packages',
      title: t('about.services.packages.title'),
      desc: t('about.services.packages.desc'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      color: 'bg-amber-500/10 text-amber-500',
    },
    {
      id: 'cargo',
      title: t('about.services.cargo.title'),
      desc: t('about.services.cargo.desc'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-5h-4.34a1 1 0 0 1-.66-.24l-1.07-1.07a1 1 0 0 1-.26-.69V18Z" />
          <circle cx="7.5" cy="18.5" r="2.5" />
          <circle cx="17.5" cy="18.5" r="2.5" />
        </svg>
      ),
      color: 'bg-emerald-500/10 text-emerald-500',
    },
  ];

  return (
    <section className="bg-background w-full px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black sm:text-5xl">
            {t('about.services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="border-foreground/5 bg-foreground/2 hover:bg-foreground/4 rounded-3xl border p-8 transition-all hover:scale-[1.02]"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${svc.color}`}
              >
                {svc.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold">{svc.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
