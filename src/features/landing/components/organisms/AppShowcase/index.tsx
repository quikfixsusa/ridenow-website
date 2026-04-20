"use client";

import React from "react";
import { Button } from "@heroui/react";
import { useLanguage, useIntersectionObserver } from "@/shared/hooks";

export const AppShowcase = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section className="relative w-full py-32 px-4 bg-background">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto rounded-[3rem] bg-foreground px-6 pt-24 pb-0 md:px-24 flex flex-col items-center text-center overflow-hidden relative shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {/* Ambient background glow inside the container */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-background mb-8 relative z-10 max-w-3xl">
          {t("appShowcase.title")}
        </h2>
        
        <p className="text-xl md:text-2xl text-background/70 max-w-2xl font-medium leading-relaxed mb-16 relative z-10">
          {t("appShowcase.description")}
        </p>

        {/* Mockup Placeholder */}
        <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] mt-8 bg-surface ring-1 ring-white/10 rounded-t-[2.5rem] shadow-2xl overflow-hidden flex flex-col border-b-0">
          
          {/* Header Bar */}
          <div className="w-full h-16 bg-foreground/5 border-b border-white/5 flex items-center px-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
          </div>

          <div className="p-8 w-full h-full flex flex-col gap-6 relative">
             <div className="w-full h-48 rounded-2xl bg-foreground/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent flex -translate-x-full animate-[shimmer_2s_infinite]"></div>
             </div>
             
             <div className="grid grid-cols-2 gap-6 h-full">
                <div className="rounded-2xl bg-foreground/5"></div>
                <div className="rounded-2xl bg-foreground/5"></div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};
