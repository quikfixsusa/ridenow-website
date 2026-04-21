'use client';

import React, { useState } from 'react';
import { Link, Button } from '@heroui/react';
import { LogoRideNow, IconRideNow } from '@/shared/components/atoms';
import { useLanguage, useConfigStore } from '@/shared/hooks';
import { HeaderProps } from './types';

export const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t, language, changeLanguage } = useLanguage();
  const { theme, setTheme } = useConfigStore();

  const menuItems = [
    { name: t('header.services'), href: '/services' },
    { name: t('header.about'), href: '/about' },
    { name: t('header.contact'), href: '/contact' },
  ];

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLangToggle = () => {
    changeLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header
      className={`ease-out-fluid pointer-events-none fixed top-6 right-0 left-0 z-50 flex w-full justify-center px-4 transition-all duration-700 ${className}`}
    >
      <div className="bg-background/70 ring-foreground/10 pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.1)] ring-1 backdrop-blur-2xl">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center pl-2 transition-transform active:scale-[0.98]"
        >
          <div className="text-foreground ease-out-fluid hidden transition-transform duration-500 group-hover:scale-105 sm:block">
            <LogoRideNow size={24} />
          </div>
          <div className="text-foreground sm:hidden">
            <IconRideNow size={24} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 px-6 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Theme & Lang Toggles */}
          <button
            onClick={handleThemeToggle}
            className="hover:bg-foreground/5 text-foreground/80 hover:text-foreground flex h-8 w-8 items-center justify-center rounded-full transition-colors"
            aria-label={t(
              'header.theme' + (theme === 'light' ? 'Dark' : 'Light')
            )}
          >
            {theme === 'light' ? (
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
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            ) : (
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
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            )}
          </button>

          <button
            onClick={handleLangToggle}
            className="hover:bg-foreground/5 text-foreground/80 hover:text-foreground flex h-8 w-10 items-center justify-center rounded-full text-xs font-semibold transition-colors"
          >
            {language.toUpperCase()}
          </button>

          <div className="bg-divider mx-2 h-4 w-px" />

          <Link
            href="/login"
            className="text-foreground px-2 text-sm font-medium transition-opacity hover:opacity-70"
          >
            {t('header.login')}
          </Link>

          <Button className="bg-foreground text-background hover:bg-foreground/90 ml-2 rounded-full border-none px-5 py-2 text-sm font-medium shadow-none transition-transform active:scale-[0.98]">
            {t('header.getStarted')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`ease-out-fluid relative z-50 flex h-10 w-10 items-center justify-center rounded-full p-2 transition-all duration-500 active:scale-95 md:hidden ${
            isMenuOpen
              ? 'bg-foreground text-background shadow-xl'
              : 'text-foreground hover:bg-foreground/5 bg-transparent'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative flex h-6 w-6 items-center justify-center">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-in fade-in zoom-in spin-in-90 duration-300"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <div className="flex scale-90 flex-col items-center justify-center gap-1.5">
                <span className="bg-foreground h-0.5 w-6 rounded-full" />
                <span className="bg-foreground h-0.5 w-6 rounded-full" />
                <span className="bg-foreground h-0.5 w-6 rounded-full" />
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`bg-background/95 ease-out-fluid pointer-events-auto fixed inset-0 z-40 flex min-h-dvh w-full flex-col px-8 pt-32 backdrop-blur-3xl transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'}`}
      >
        {/* Close Button Inside Menu */}
        <div className="absolute top-8 right-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="bg-foreground text-background flex h-12 w-12 items-center justify-center rounded-full shadow-2xl transition-all active:scale-95"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {menuItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-foreground ease-out-fluid flex text-3xl font-medium transition-all duration-500 ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div
            className={`border-divider mt-8 flex items-center gap-6 border-t pt-8 transition-all delay-500 duration-500 ease-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <button
              onClick={handleThemeToggle}
              className="text-foreground/80 flex items-center gap-2 font-medium"
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <button
              onClick={handleLangToggle}
              className="text-foreground/80 flex items-center gap-2 font-medium uppercase"
            >
              {language === 'en' ? t('header.langES') : t('header.langEN')}
            </button>
          </div>

          <div
            className={`mt-8 flex flex-col gap-4 transition-all delay-600 duration-500 ease-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            <Button className="bg-foreground text-background h-14 w-full rounded-2xl text-lg font-medium">
              {t('header.getStarted')}
            </Button>
            <Button
              variant="ghost"
              className="border-divider h-14 w-full rounded-2xl border text-lg font-medium"
            >
              {t('header.login')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
