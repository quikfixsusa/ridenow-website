import { Hero, Features } from "../../organisms";
import { Button } from "@heroui/react";

export const LandingTemplate: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* Footer CTA Section */}
      <section id="services" className="py-24 px-6 text-center bg-surface-secondary/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black mb-6 md:text-5xl tracking-tight">Ready to ride?</h2>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied riders and drivers today. Fast, safe, and reliable transportation at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="primary"
              className="h-16 px-12 text-xl font-bold shadow-2xl shadow-accent/30"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-12 text-xl font-bold border-2"
            >
              Become a Driver
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
