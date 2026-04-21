'use client';

import React from 'react';
import { ServicesCTA, ServicesHero, ServicesList } from '../../organisms';

export const ServicesTemplate = () => {
  return (
    <div className="flex w-full flex-col">
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </div>
  );
};

export default ServicesTemplate;
