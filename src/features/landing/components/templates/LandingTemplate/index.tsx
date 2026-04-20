'use client';

import {
  Hero,
  Features,
  DriverSplit,
  AppShowcase,
  RideCarousel,
} from '../../organisms';
import { Button } from '@heroui/react';
import { useLanguage } from '@/shared/hooks';

export const LandingTemplate: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="w-full flex-col items-center">
      <Hero />
      <Features />
      <RideCarousel />
      <DriverSplit />
      <AppShowcase />

      {/* Footer CTA Section */}
      <section
        id="cta"
        className="bg-background border-divider/40 relative flex w-full flex-col items-center justify-center overflow-hidden border-t px-6 py-40 text-center"
      >
        <div className="bg-accent/5 pointer-events-none absolute inset-0 -translate-y-1/2 scale-[2] rounded-[100%] blur-[100px]"></div>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <h2 className="text-foreground font-display mb-8 text-5xl font-black md:text-7xl">
            {t('ctaSection.title')}
          </h2>
          <p className="text-foreground/60 mb-12 max-w-2xl text-xl font-medium md:text-2xl">
            {t('ctaSection.subtitle')}
          </p>

          <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <Button className="group bg-foreground text-background h-auto rounded-full px-10 py-5 text-lg font-medium transition-transform active:scale-[0.98]">
              {t('ctaSection.button')}
            </Button>
            <Button
              variant="outline"
              className="border-divider text-foreground hover:bg-foreground/5 h-auto rounded-full px-10 py-5 text-lg font-medium transition-colors"
            >
              {t('ctaSection.altButton')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
