import React from "react";
import { Navbar, Hero, Features, Footer } from "../../organisms";

export const LandingTemplate: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-accent/30">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        {/* Placeholder for other sections like Driver vs Rider */}
        <section id="services" className="py-20 px-6 text-center">
            <h2 className="text-4xl font-black mb-8">Ready to ride?</h2>
            <div className="flex justify-center gap-4">
               <div className="h-64 w-full max-w-sm rounded-3xl bg-surface-secondary border border-separator flex items-center justify-center p-6">
                 <span className="text-muted font-bold italic text-lg text-center">Driver vs Rider section coming soon...</span>
               </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
