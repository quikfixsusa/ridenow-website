'use client';

import React, { useState, useEffect } from 'react';
import { Link, Button } from '@heroui/react';
import { LogoRideNow, IconRideNow } from '@/shared/components/atoms';
import { NavbarProps } from './types';

export const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-background/80 border-divider border-b backdrop-blur-md'
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <div className="hidden sm:block">
              <LogoRideNow size={32} />
            </div>
            <div className="sm:hidden">
              <IconRideNow size={32} />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 justify-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="text-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Login
          </Link>
          <Button
            size="md"
            variant="primary"
            className="shadow-primary/20 font-semibold shadow-lg"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-foreground flex p-2 transition-transform active:scale-95 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-background/95 fixed inset-x-0 top-[65px] bottom-0 z-40 backdrop-blur-lg transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 p-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary text-2xl font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <Button size="lg" variant="primary" className="w-full font-bold">
              Get Started
            </Button>
            <Link href="/login">
              <Button size="lg" variant="ghost" className="w-full font-bold">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
