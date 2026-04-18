"use client";

import React from "react";
import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-background py-20 px-6">
      {/* Decorative background circle */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-black tracking-tight text-foreground sm:text-7xl">
          {t('landing.hero.title')}
        </h1>
        <p className="mb-10 text-xl leading-relaxed text-muted sm:text-2xl max-w-2xl mx-auto">
          {t('landing.hero.subtitle')}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-14 px-10 text-lg font-bold shadow-xl shadow-accent/20" variant="primary">
            {t('landing.hero.cta')}
          </Button>
          <Button size="lg" variant="ghost" className="h-14 px-10 text-lg font-bold">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Mock illustration area */}
      <div className="mt-16 relative w-full max-w-5xl aspect-video rounded-3xl bg-surface border border-separator shadow-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-muted/40 font-bold text-2xl group-hover:scale-110 transition-transform duration-500">RideNow App Preview</span>
        </div>
      </div>
    </section>
  );
};
