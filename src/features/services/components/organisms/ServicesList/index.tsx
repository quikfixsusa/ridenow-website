'use client';

import React from 'react';
import { useLanguage } from '@/shared/hooks';
import ServiceCard from '../../molecules/ServiceCard';

export const ServicesList = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'shared-rides',
      title: t('about.services.shared.title'),
      description: t('about.services.shared.desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      features: t('servicesPage.card.features.shared', { returnObjects: true }) as string[],
    },
    {
      id: 'package-delivery',
      title: t('about.services.packages.title'),
      description: t('about.services.packages.desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      features: t('servicesPage.card.features.packages', { returnObjects: true }) as string[],
    },
    {
      id: 'cargo-transport',
      title: t('about.services.cargo.title'),
      description: t('about.services.cargo.desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-5h-4.34a1 1 0 0 1-.66-.24l-1.07-1.07a1 1 0 0 1-.26-.69V18Z" />
          <circle cx="7.5" cy="18.5" r="2.5" />
          <circle cx="17.5" cy="18.5" r="2.5" />
        </svg>
      ),
      features: t('servicesPage.card.features.cargo', { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="bg-background w-full px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-32 md:gap-48">
          {services.map((svc, i) => (
            <ServiceCard 
              key={i} 
              id={svc.id}
              index={i}
              title={svc.title}
              description={svc.description}
              icon={svc.icon}
              features={svc.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
