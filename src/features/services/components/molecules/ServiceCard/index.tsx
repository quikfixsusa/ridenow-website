'use client';

import React from 'react';
import { useLanguage } from '@/shared/hooks';

interface ServiceCardProps {
  id?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  image?: string;
  features?: string[];
}

export const ServiceCard = ({
  id,
  title,
  description,
  icon,
  index,
  features,
}: ServiceCardProps) => {
  const isEven = index % 2 === 0;
  const { t } = useLanguage();

  return (
    <div
      id={id}
      className={`flex flex-col gap-12 md:flex-row md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} animate-in fade-in slide-in-from-bottom-24 fill-mode-both duration-1000 scroll-mt-24`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Visual Part */}
      <div className="group relative w-full md:w-1/2">
        <div className="from-primary/10 absolute -inset-4 rounded-[40px] bg-linear-to-tr to-blue-500/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
        <div className="border-foreground/5 bg-foreground/2 relative aspect-4/3 w-full overflow-hidden rounded-[32px] border backdrop-blur-3xl transition-transform duration-700 group-hover:scale-[1.01]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-foreground/10 transition-transform duration-700 group-hover:scale-110">
              {icon}
            </div>
          </div>
          {/* Subtle noise pattern or texture could go here */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        </div>
      </div>

      {/* Content Part */}
      <div className="w-full space-y-8 md:w-1/2 md:px-12">
        <div className="flex items-center gap-4">
          <div className="bg-foreground text-background shadow-foreground/20 flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg">
            {/* Small version of icon or specific bullet icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            {t('servicesPage.card.serviceLabel')} 0{index + 1}
          </span>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-foreground text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>

          <p className="text-foreground/60 max-w-xl text-lg leading-relaxed md:text-xl">
            {description}
          </p>
        </div>

        {Array.isArray(features) && (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <li key={i} className="group flex items-center gap-3">
                <div className="bg-foreground/5 group-hover:bg-primary/20 flex h-6 w-6 items-center justify-center rounded-full transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-foreground/80 text-sm font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="pt-4">
          <button className="text-foreground/80 hover:text-foreground flex items-center gap-2 text-sm font-bold tracking-tight transition-colors">
            {t('servicesPage.card.learnMore').toUpperCase()}
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
