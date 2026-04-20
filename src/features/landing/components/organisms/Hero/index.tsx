"use client";

import React from "react";
import { Button } from "@heroui/react";
import { useLanguage, useIntersectionObserver } from "@/shared/hooks";

export const Hero = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center bg-background px-4 overflow-hidden pt-32 pb-16">
      
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

      <div 
        ref={ref}
        className={`max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Left: Typography Block */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] text-foreground mb-8">
            <span className="block">{t("hero.title1")}</span>
            <span className="block mt-2 text-accent drop-shadow-sm">{t("hero.title2")}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 font-medium leading-relaxed max-w-lg mb-12">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              className="group px-8 py-4 h-auto rounded-full bg-foreground text-background font-bold text-lg inline-flex items-center justify-center gap-3 transition-transform active:scale-[0.98]"
            >
              {t("hero.ctaPrimary")}
              <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-4 h-auto rounded-full border-divider font-bold text-lg text-foreground hover:bg-foreground/5 transition-colors"
            >
              {t("hero.ctaSecondary")}
            </Button>
          </div>
        </div>

        {/* Right: Mockup Image/Graphic (Double-Bezel) */}
        <div className={`relative w-full h-[600px] flex justify-center items-center lg:justify-end transition-all duration-1000 delay-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}>
          {/* Outer Shell */}
          <div className="w-full max-w-[320px] h-full max-h-[640px] rounded-[3rem] bg-foreground/5 ring-1 ring-foreground/10 p-2 shadow-2xl backdrop-blur-3xl relative flex flex-col justify-center items-center">
            {/* Inner Core */}
            <div className="w-full h-full rounded-[calc(3rem-0.5rem)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden flex flex-col items-center justify-center border border-divider">
               <div className="w-24 h-24 rounded-full bg-accent text-accent-foreground flex items-center justify-center animate-pulse shadow-[0_0_40px_rgba(255,200,0,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
