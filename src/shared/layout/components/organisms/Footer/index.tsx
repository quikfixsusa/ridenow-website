'use client';

import React from 'react';
import { Link } from '@heroui/react';
import { LogoRideNow } from '@/shared/components/atoms';
import { useLanguage } from '@/shared/hooks';
import { FooterProps } from './types';

export const Footer = ({ className }: FooterProps) => {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t('footer.services'),
      links: [
        {
          name: t('about.services.shared.title'),
          href: '/services#shared-rides',
        },
        {
          name: t('about.services.packages.title'),
          href: '/services#package-delivery',
        },
        {
          name: t('about.services.cargo.title'),
          href: '/services#cargo-transport',
        },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { name: t('footer.c1'), href: '/about' },
        { name: t('footer.c3'), href: '/contact' },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { name: t('footer.l1'), href: '/terms' },
        { name: t('footer.l2'), href: '/privacy' },
        { name: t('footer.l3'), href: '/cookies' },
      ],
    },
  ];

  return (
    <footer
      className={`bg-background text-foreground border-divider border-t px-6 py-24 ${className}`}
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 md:flex-row md:gap-8">
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-6 md:w-1/3">
          <LogoRideNow size={48} />
          <p className="text-foreground/60 max-w-sm text-base leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid flex-1 grid-cols-2 justify-end gap-12 md:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h4 className="text-foreground/40 text-xs font-semibold tracking-[0.15em] uppercase">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-divider/50 mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
        <p className="text-foreground/40 text-xs font-medium tracking-wide">
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>
        <div className="flex gap-6">
          <Link
            target="_blank"
            href="https://www.facebook.com/ridenowtaxis/"
            className="text-foreground/40 hover:text-foreground transition-colors"
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
            className="text-foreground/40 hover:text-foreground transition-colors"
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
            className="text-foreground/40 hover:text-foreground transition-colors"
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
            className="text-foreground/40 hover:text-foreground transition-colors"
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

export default Footer;
