'use client';

import React from 'react';
import { Link } from '@heroui/react';
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
              <h4 className="text-foreground/50 text-sm font-medium tracking-wider uppercase">
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
        <h4 className="text-foreground/50 mb-6 text-sm font-medium tracking-wider uppercase">
          {t('contact.info.social')}
        </h4>
        <div className="flex gap-4">
          <Link
            target="_blank"
            href="https://www.facebook.com/ridenowtaxis/"
            className="bg-foreground/5 text-foreground hover:bg-foreground hover:text-background flex h-12 w-12 items-center justify-center rounded-full transition-all"
            aria-label="Facebook"
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
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/ridenowtaxis"
            className="bg-foreground/5 text-foreground hover:bg-foreground hover:text-background flex h-12 w-12 items-center justify-center rounded-full transition-all"
            aria-label="Instagram"
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link
            target="_blank"
            href="https://www.tiktok.com/@ridenowtaxis"
            className="bg-foreground/5 text-foreground hover:bg-foreground hover:text-background flex h-12 w-12 items-center justify-center rounded-full transition-all"
            aria-label="TikTok"
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
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/@ridenowtaxis"
            className="bg-foreground/5 text-foreground hover:bg-foreground hover:text-background flex h-12 w-12 items-center justify-center rounded-full transition-all"
            aria-label="YouTube"
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
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
