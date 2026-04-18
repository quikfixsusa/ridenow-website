"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "../../atoms";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-background border-t border-separator py-16 px-6">
      <div className="mx-auto max-w-7xl grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="text-muted leading-relaxed">
            Making urban mobility safer, faster, and more convenient for everyone.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="flex flex-col gap-2 text-muted">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Product</h4>
          <ul className="flex flex-col gap-2 text-muted">
            <li>Ride</li>
            <li>Drive</li>
            <li>Business</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Support</h4>
          <ul className="flex flex-col gap-2 text-muted">
            <li>Help Center</li>
            <li>Safety</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-separator flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>{t('landing.footer.rights')}</p>
        <div className="flex gap-6">
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>Instagram</span>
        </div>
      </div>
    </footer>
  );
};
