'use client';

import React from 'react';
import { Link } from '@heroui/react';
import { LogoRideNow } from '@/shared/components/atoms';
import { FooterProps } from './types';

export const Footer = ({ className }: FooterProps) => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'City Rides', href: '#' },
        { name: 'Airport Transfer', href: '#' },
        { name: 'Corporate Travel', href: '#' },
        { name: 'Private Driver', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Use', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className={`bg-background border-t border-divider py-12 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <LogoRideNow size={40} />
          <p className="text-default-500 text-sm max-w-xs mt-2">
            Safe, reliable, and comfortable rides anywhere, anytime. Your premium transportation partner.
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-default-900 uppercase tracking-wider">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-default-500 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-default-400">
          © {new Date().getFullYear()} RIDE NOW TAXIS, Inc. All rights reserved.
        </p>
        <div className="flex gap-4">
          {/* Social media icons could go here */}
          <Link href="#" className="text-default-400 hover:text-default-600">
            Twitter
          </Link>
          <Link href="#" className="text-default-400 hover:text-default-600">
            Instagram
          </Link>
          <Link href="#" className="text-default-400 hover:text-default-600">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
