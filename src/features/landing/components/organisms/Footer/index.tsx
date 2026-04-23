'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@heroui/react';
import { Logo } from '../../atoms';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-separator w-full border-t px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="text-muted leading-relaxed">
            Making urban mobility safer, faster, and more convenient for
            everyone.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="text-muted flex flex-col gap-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Product</h4>
          <ul className="text-muted flex flex-col gap-2">
            <li>Ride</li>
            <li>Drive</li>
            <li>Business</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Support</h4>
          <ul className="text-muted flex flex-col gap-2">
            <li>Help Center</li>
            <li>Safety</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="border-separator text-muted mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t pt-8 text-sm sm:flex-row">
        <p>{t('landing.footer.rights')}</p>
        <div className="flex gap-6">
          <Link
            target="_blank"
            href="https://www.facebook.com/ridenowtaxis/"
            className="text-muted hover:text-foreground transition-colors"
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
            className="text-muted hover:text-foreground transition-colors"
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
            className="text-muted hover:text-foreground transition-colors"
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
            className="text-muted hover:text-foreground transition-colors"
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
    </footer>
  );
};
