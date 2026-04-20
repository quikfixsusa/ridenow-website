"use client";

import React from "react";
import { useLanguage, useIntersectionObserver } from "@/shared/hooks";

export const Features = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const featuresList = [
    {
      id: "f1",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>,
      colSpan: "md:col-span-2",
    },
    {
      id: "f2",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      colSpan: "md:col-span-1",
    },
    {
      id: "f3",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>,
      colSpan: "md:col-span-1",
    },
    {
      id: "f4",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
      colSpan: "md:col-span-2",
    }
  ];

  return (
    <section className="relative w-full py-32 px-4 bg-background border-t border-divider/40">
      <div 
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col items-center"
      >
        <div className={`text-center mb-20 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center rounded-full px-3 py-1 bg-foreground/5 mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/60">
              {t("features.eyebrow")}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            {t("features.title")}
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {featuresList.map((feature, i) => (
            <div 
              key={feature.id}
              className={`group flex flex-col justify-between rounded-[2rem] bg-surface ring-1 ring-divider p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${feature.colSpan} ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${(i * 100) + 200}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 mb-8">
                {feature.icon}
              </div>
              
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {t(`features.${feature.id}Title`)}
                </h3>
                <p className="text-foreground/60 leading-relaxed font-medium">
                  {t(`features.${feature.id}Desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
