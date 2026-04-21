'use client';

import React from 'react';
import ContactForm from '../../components/organisms/ContactForm';
import ContactInfo from '../../components/organisms/ContactInfo';

export const ContactPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <section className="relative px-4 pt-40 pb-24 md:pt-48 md:pb-32">
        {/* Background Elements */}
        <div className="bg-primary/5 absolute top-0 -left-64 h-[500px] w-[500px] rounded-full blur-3xl" />
        <div className="bg-foreground/2 absolute -right-64 bottom-0 h-[600px] w-[600px] rounded-full blur-3xl" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info Column */}
          <ContactInfo />

          {/* Form Column */}
          <div className="relative">
            <div className="bg-foreground absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-5 blur-2xl" />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map or secondary section */}
      <section className="bg-foreground/2 border-foreground/5 relative h-[500px] w-full overflow-hidden border-t border-b">
        {/* Visual Map Placeholder - High End Aesthetic */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&autofromat=fit&crop=entropy')] bg-cover bg-center opacity-40 grayscale transition-opacity duration-1000 hover:opacity-60" />
        <div className="from-background to-background/50 absolute inset-0 bg-linear-to-t via-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/80 border-foreground/10 max-w-sm rounded-2xl border p-6 text-center shadow-2xl backdrop-blur-md">
            <div className="bg-foreground text-background mx-auto mb-4 flex h-12 w-12 animate-bounce items-center justify-center rounded-xl">
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
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h4 className="mb-1 text-xl font-bold">RideNow HQ</h4>
            <p className="text-foreground/60 text-sm">
              123 Mobility St, Tech City, TC 12345
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-bold tracking-wider text-green-500 uppercase">
                Open Now
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
