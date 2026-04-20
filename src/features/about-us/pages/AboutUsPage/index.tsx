'use client';

import React from 'react';
import { Footer } from '@/shared';
import AboutHero from '../../components/organisms/AboutHero';
import Mission from '../../components/organisms/Mission';
import ServicesDetail from '../../components/organisms/ServicesDetail';

export const AboutUsPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <AboutHero />
      <Mission />
      <ServicesDetail />
      {/* Values section could go here too */}
      <section className="bg-foreground/2 border-foreground/5 border-t px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-3xl font-bold">Nuestros Valores</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <div className="text-primary text-4xl font-black">01</div>
              <h4 className="text-foreground text-xl font-bold">Seguridad</h4>
              <p className="text-foreground/60 text-sm">
                Protocolos rigurosos para cada kilómetro recorrido.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-primary text-4xl font-black">02</div>
              <h4 className="text-foreground text-xl font-bold">Innovación</h4>
              <p className="text-foreground/60 text-sm">
                Tecnología al servicio de tus necesidades reales.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-primary text-4xl font-black">03</div>
              <h4 className="text-foreground text-xl font-bold">Compromiso</h4>
              <p className="text-foreground/60 text-sm">
                Estamos donde nos necesitas, cuando nos necesitas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
