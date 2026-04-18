"use client";

import React from "react";
import { Card } from "@heroui/react";
import { useTranslation } from "react-i18next";

export const Features: React.FC = () => {
  const { t } = useTranslation();

  const featuresList = [
    {
      title: t('landing.features.fastTitle'),
      description: t('landing.features.fastDesc'),
      icon: "⚡",
    },
    {
      title: t('landing.features.safeTitle'),
      description: t('landing.features.safeDesc'),
      icon: "🛡️",
    },
    {
      title: t('landing.features.availableTitle'),
      description: t('landing.features.availableDesc'),
      icon: "🌍",
    },
  ];

  return (
    <section id="features" className="w-full bg-surface py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, index) => (
            <Card key={index} className="p-8 border-none bg-background shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Card.Header className="flex flex-col items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-3xl">
                  {feature.icon}
                </div>
                <div>
                   <Card.Title className="text-2xl font-bold">{feature.title}</Card.Title>
                   <Card.Description className="mt-2 text-lg leading-relaxed text-muted">
                    {feature.description}
                  </Card.Description>
                </div>
              </Card.Header>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
