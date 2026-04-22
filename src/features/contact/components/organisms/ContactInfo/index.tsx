'use client';

import React from 'react';
import { useLanguage } from '@/shared/hooks';

export const ContactInfo = () => {
  const { t } = useLanguage();

  const infoItems = [
    {
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
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: t('contact.info.title_address'),
      value: t('contact.info.address'),
    },
    {
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: t('contact.info.title_phone'),
      value: t('contact.info.phone'),
    },
    {
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
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: t('contact.info.title_email'),
      value: t('contact.info.email'),
    },
  ];

  return (
    <div className="flex flex-col justify-center space-y-12 py-12 md:pr-12">
      <div>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {t('contact.hero.title')}
        </h2>
        <p className="text-foreground/60 mt-6 text-lg leading-relaxed">
          {t('contact.hero.subtitle')}
        </p>
      </div>

      <div className="space-y-8">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-5">
            <div className="bg-foreground text-background flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg">
              {item.icon}
            </div>
            <div>
              <h4 className="text-foreground/50 text-sm font-medium uppercase tracking-wider">
                {item.label}
              </h4>
              <p className="text-foreground mt-1 text-xl font-semibold">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8">
        <h4 className="text-foreground/50 mb-6 text-sm font-medium uppercase tracking-wider">
          {t('contact.info.social')}
        </h4>
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-foreground/5 text-foreground hover:bg-foreground hover:text-background flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
