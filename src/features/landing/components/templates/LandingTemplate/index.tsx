"use client";

import { Hero, Features, DriverSplit, AppShowcase } from "../../organisms";
import { Button } from "@heroui/react";
import { useLanguage } from "@/shared/hooks";

export const LandingTemplate: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="w-full flex-col items-center">
      <Hero />
      <Features />
      <DriverSplit />
      <AppShowcase />

      {/* Footer CTA Section */}
      <section
        id="cta"
        className="relative w-full py-40 px-6 text-center bg-background flex flex-col items-center justify-center overflow-hidden border-t border-divider/40"
      >
        <div className="absolute inset-0 bg-accent/5 rounded-[100%] scale-[2] -translate-y-1/2 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-foreground">
            {t("ctaSection.title")}
          </h2>
          <p className="text-xl md:text-2xl text-foreground/60 mb-12 max-w-2xl font-medium">
            {t("ctaSection.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Button className="group px-10 py-5 h-auto rounded-full bg-foreground text-background font-bold text-lg transition-transform active:scale-[0.98]">
              {t("ctaSection.button")}
            </Button>
            <Button
              variant="outline"
              className="px-10 py-5 h-auto rounded-full border-divider font-bold text-lg text-foreground hover:bg-foreground/5 transition-colors"
            >
              {t("ctaSection.altButton")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
