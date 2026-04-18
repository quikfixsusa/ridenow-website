"use client";

import React from "react";
import { Button, Link, Toolbar } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Logo } from "../../atoms";

export const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-separator bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <Toolbar aria-label="Main navigation" className="hidden gap-8 md:flex">
          <Link
            className="text-sm font-medium hover:text-accent transition-colors"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-accent transition-colors"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:text-accent transition-colors"
            href="#about"
          >
            About
          </Link>
        </Toolbar>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex">
            Login
          </Button>
          <Button variant="primary">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};
