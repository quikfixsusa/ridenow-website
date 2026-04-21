'use client';

import React from 'react';
import { Chip } from '@heroui/react';

interface LegalSection {
  title: string;
  content: string | string[];
}

interface LegalPageTemplateProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  subtitle?: string | string[];
}

export const LegalPageTemplate: React.FC<LegalPageTemplateProps> = ({
  title,
  lastUpdated,
  sections,
  subtitle,
}) => {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 pt-32 pb-24 md:px-12">
      <header className="mb-16 space-y-6">
        <Chip className="h-8 text-[10px] font-semibold tracking-[0.2em] uppercase">
          {lastUpdated}
        </Chip>
        <h1 className="font-clash text-foreground text-5xl leading-tight font-bold md:text-7xl">
          {title}
        </h1>
        {subtitle && Array.isArray(subtitle) ? (
          <div className="space-y-4">
            {subtitle.map((p, i) => (
              <p
                key={i}
                className="text-foreground/60 max-w-3xl text-xl leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-foreground/60 max-w-3xl text-xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="bg-divider mt-12 h-px w-full" />
      </header>

      <div className="space-y-16">
        {sections.map((section, index) => (
          <section
            key={index}
            className="group flex flex-col gap-8 md:flex-row md:gap-16"
          >
            <div className="md:w-1/3">
              <h2 className="text-foreground/40 group-hover:text-primary sticky top-32 text-sm font-semibold tracking-[0.15em] uppercase transition-colors">
                {section.title}
              </h2>
            </div>
            <div className="md:w-2/3">
              {Array.isArray(section.content) ? (
                <div className="space-y-4">
                  {section.content.map((p, i) => (
                    <p
                      key={i}
                      className="text-foreground/80 text-justify text-lg leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-foreground/80 text-justify text-lg leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
