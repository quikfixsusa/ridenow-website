"use client";

import React, { useState, useEffect } from "react";
import { Link, Button } from "@heroui/react";
import { LogoRideNow, IconRideNow } from "@/shared/components/atoms";
import { useLanguage, useConfigStore } from "@/shared/hooks";
import { HeaderProps } from "./types";

export const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();
  const { theme, setTheme } = useConfigStore();

  const menuItems = [
    { name: t("header.services"), href: "#services" },
    { name: t("header.about"), href: "#about" },
    { name: t("header.contact"), href: "#contact" },
  ];

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLangToggle = () => {
    changeLanguage(language === "en" ? "es" : "en");
  };

  return (
    <header className={`fixed top-6 left-0 right-0 w-full z-50 flex justify-center px-4 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${className}`}>
      <div className="pointer-events-auto bg-background/70 backdrop-blur-2xl ring-1 ring-foreground/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.1)] rounded-full px-4 py-2 w-full max-w-5xl flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center group pl-2 transition-transform active:scale-[0.98]">
          <div className="hidden sm:block text-foreground group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <LogoRideNow size={24} />
          </div>
          <div className="sm:hidden text-foreground">
            <IconRideNow size={24} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 px-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme & Lang Toggles */}
          <button 
            onClick={handleThemeToggle}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-colors"
            aria-label={t("header.theme" + (theme === "light" ? "Dark" : "Light"))}
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
            )}
          </button>

          <button 
            onClick={handleLangToggle}
            className="w-10 h-8 rounded-full flex items-center justify-center text-xs font-semibold hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition-colors"
          >
            {language.toUpperCase()}
          </button>

          <div className="w-[1px] h-4 bg-divider mx-2" />

          <Link href="/login" className="text-sm font-medium text-foreground px-2 hover:opacity-70 transition-opacity">
            {t("header.login")}
          </Link>
          
          <Button 
            className="ml-2 px-5 py-2 rounded-full font-medium text-sm transition-transform active:scale-[0.98] bg-foreground text-background hover:bg-foreground/90 border-none shadow-none"
          >
            {t("header.getStarted")}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 min-h-[100dvh] w-full bg-background/95 backdrop-blur-3xl z-40 flex flex-col pt-32 px-8 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <div className="flex flex-col gap-6">
          {menuItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-3xl font-medium text-foreground flex transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <div className={`mt-8 pt-8 border-t border-divider flex items-center gap-6 transition-all duration-500 ease-out delay-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <button onClick={handleThemeToggle} className="flex items-center gap-2 text-foreground/80 font-medium">
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            <button onClick={handleLangToggle} className="flex items-center gap-2 text-foreground/80 font-medium uppercase">
              {language === "en" ? t("header.langES") : t("header.langEN")}
            </button>
          </div>

          <div className={`mt-8 flex flex-col gap-4 transition-all duration-500 ease-out delay-600 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <Button className="w-full h-14 rounded-2xl bg-foreground text-background font-medium text-lg">
              {t("header.getStarted")}
            </Button>
            <Button variant="ghost" className="w-full h-14 rounded-2xl font-medium text-lg border border-divider">
              {t("header.login")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
