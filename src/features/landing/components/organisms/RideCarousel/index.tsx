'use client';

import React, { useEffect, useState, useRef } from 'react';
import { RideCard } from '../../molecules';
import { fetchRides } from '../../../services';
import { RideType } from '@/shared/types';
import { useLanguage, useConfigStore } from '@/shared/hooks';

export const RideCarousel: React.FC = () => {
  const [rides, setRides] = useState<RideType[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const { country: selectedCountry, setCountry } = useConfigStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getRides = async () => {
      setLoading(true);
      try {
        const data = await fetchRides();
        setRides(data);

        // Extract unique countries from rides but filter to only US and VE
        const countrySet = new Set<string>();
        data.forEach((ride) => {
          const rideCountries =
            ride.available_countries || Object.keys(ride.base_fee || {});
          rideCountries.forEach((c) => {
            if (c === 'US' || c === 'VE') countrySet.add(c);
          });
        });

        const uniqueCountries = Array.from(countrySet).sort();
        setCountries(uniqueCountries);

        // Default to US if available, or first in list
        if (
          uniqueCountries.length > 0 &&
          (!selectedCountry || !uniqueCountries.includes(selectedCountry))
        ) {
          setCountry(
            uniqueCountries.includes('US') ? 'US' : uniqueCountries[0]
          );
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching rides:', error);
        setLoading(false);
      }
    };

    getRides();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Keeping this as [] to ensure mount-only execution for initial fetch

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!loading && rides.length === 0) return null;

  return (
    <section
      ref={containerRef}
      className="bg-background relative w-full overflow-hidden py-32 md:py-48"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header content */}
        <div
          className={`ease-out-fluid mb-16 flex flex-col items-start justify-between gap-8 transition-all duration-1000 md:flex-row md:items-end ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <div className="max-w-3xl">
            <div className="border-divider mb-6 inline-flex rounded-full border px-4 py-1.5 backdrop-blur-md">
              <span className="text-foreground/40 text-[10px] font-bold tracking-[0.3em] uppercase">
                {t('rideCarousel.title')}
              </span>
            </div>
            <h3 className="text-foreground font-display text-3xl leading-[0.8] font-black tracking-tighter uppercase italic md:text-5xl">
              {t('rideCarousel.subtitle')}
            </h3>

            {/* Country Selector Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {countries.map((c) => (
                <button
                  key={c}
                  onClick={() => setCountry(c)}
                  className={`ease-out-fluid rounded-full px-5 py-2 text-xs font-bold tracking-widest transition-all duration-300 ${
                    selectedCountry === c
                      ? 'bg-foreground text-background scale-105 shadow-xl'
                      : 'border-divider hover:border-foreground/20 bg-surface/50 text-foreground/40 border backdrop-blur-sm'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="group border-divider hover:border-foreground/20 ease-out-fluid flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-500 active:scale-95"
              aria-label="Previous"
            >
              <div className="bg-foreground/5 flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-500 group-hover:-translate-x-1 dark:bg-white/5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
            <button
              onClick={() => scroll('right')}
              className="group bg-foreground text-background ease-out-fluid flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 hover:opacity-90 active:scale-95"
              aria-label="Next"
            >
              <div className="bg-background/10 flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-500 group-hover:translate-x-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className={`scrollbar-hide ease-out-fluid flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-12 transition-all delay-300 duration-1000 ${isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-24 scale-95 opacity-0'}`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[300px] snap-start md:min-w-[400px]"
                >
                  <div className="bg-foreground/10 h-[480px] w-full animate-pulse rounded-[2rem]" />
                </div>
              ))
            : rides.map((ride, idx) => (
                <div
                  key={ride.id}
                  className="snap-start"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <RideCard ride={ride} />
                </div>
              ))}
        </div>
      </div>

      {/* Decorative background element */}
      <div className="bg-primary/5 pointer-events-none absolute top-1/2 -right-20 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-[150px]" />
      <div className="bg-accent/5 pointer-events-none absolute bottom-0 -left-20 -z-10 h-[400px] w-[400px] rounded-full blur-[120px]" />
    </section>
  );
};
