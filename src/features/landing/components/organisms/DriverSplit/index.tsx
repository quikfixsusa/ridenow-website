"use client";

import React from "react";
import { Button } from "@heroui/react";
import { useLanguage, useIntersectionObserver } from "@/shared/hooks";

export const DriverSplit = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center bg-background px-4 py-24 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isIntersecting
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-24"
        }`}
      >
        {/* Left Column: Typography */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 bg-accent/10 border border-accent/20 mb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
              {t("driverSplit.badge")}
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground mb-8">
            {t("driverSplit.title")}
          </h2>

          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg mb-12 font-medium">
            {t("driverSplit.description")}
          </p>

          <ul className="flex flex-col gap-6 mb-12 w-full max-w-sm">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-colors">
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
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-base font-semibold text-foreground/90">
                  {t(`driverSplit.bullet${i}`)}
                </span>
              </li>
            ))}
          </ul>

          <Button className="group px-8 py-4 h-auto rounded-full bg-foreground text-background font-bold text-lg inline-flex items-center gap-4 transition-transform active:scale-[0.98]">
            {t("driverSplit.cta")}
            <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </Button>
        </div>

        {/* Right Column: Physical Mockup Card (Double-Bezel) */}
        <div className="w-full md:w-1/2 relative h-[600px] flex justify-center items-center">
          <div className="absolute inset-0 bg-accent/5 rounded-[3rem] -rotate-3 scale-105 blur-2xl transition-all duration-1000 ease-out"></div>

          <div className="w-full max-w-md h-full rounded-[2.5rem] bg-foreground/5 ring-1 ring-foreground/10 p-2 shadow-2xl backdrop-blur-md relative transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <div className="w-full h-full rounded-[calc(2.5rem-0.5rem)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden flex flex-col justify-between p-8">
              <div className="w-full">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-6 shadow-lg shadow-accent/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                  $1,240.50
                </h3>
                <p className="text-sm font-medium text-foreground/50">
                  This week&apos;s earnings
                </p>
              </div>

              <div className="w-full space-y-4">
                <div className="h-16 w-full rounded-2xl bg-foreground/5 animate-pulse"></div>
                <div
                  className="h-16 w-full rounded-2xl bg-foreground/5 animate-pulse"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="h-16 w-full rounded-2xl bg-foreground/5 animate-pulse"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
