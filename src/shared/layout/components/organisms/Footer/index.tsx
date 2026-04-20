"use client";

import React from "react";
import { Link } from "@heroui/react";
import { LogoRideNow } from "@/shared/components/atoms";
import { useLanguage } from "@/shared/hooks";
import { FooterProps } from "./types";

export const Footer = ({ className }: FooterProps) => {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t("footer.services"),
      links: [
        { name: t("footer.s1"), href: "#" },
        { name: t("footer.s2"), href: "#" },
        { name: t("footer.s3"), href: "#" },
        { name: t("footer.s4"), href: "#" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { name: t("footer.c1"), href: "#" },
        { name: t("footer.c2"), href: "#" },
        { name: t("footer.c3"), href: "#" },
        { name: t("footer.c4"), href: "#" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { name: t("footer.l1"), href: "#" },
        { name: t("footer.l2"), href: "#" },
        { name: t("footer.l3"), href: "#" },
      ],
    },
  ];

  return (
    <footer className={`bg-background text-foreground py-24 px-6 border-t border-divider ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <LogoRideNow size={48} />
          <p className="text-foreground/60 text-base leading-relaxed max-w-sm">
            {t("footer.desc")}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1 justify-end">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/40">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-divider/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-foreground/40 font-medium tracking-wide">
          © {new Date().getFullYear()} {t("footer.rights")}
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-foreground/40 hover:text-foreground transition-colors text-sm">
            Twitter
          </Link>
          <Link href="#" className="text-foreground/40 hover:text-foreground transition-colors text-sm">
            Instagram
          </Link>
          <Link href="#" className="text-foreground/40 hover:text-foreground transition-colors text-sm">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
