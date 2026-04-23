'use client';

import React from 'react';
import { RideType } from '@/shared/types';
import { useLanguage, useConfigStore } from '@/shared/hooks';

interface RideCardProps {
  ride: RideType;
}

export const RideCard: React.FC<RideCardProps> = ({ ride }) => {
  const { language, t } = useLanguage();
  const { country: selectedCountry } = useConfigStore();

  // Helper to get text based on current language
  const getLocalizedText = (textObj: any) =>
    textObj?.[language] || textObj?.en || '';

  // Helper to format price.
  const getDisplayPrice = () => {
    const prices = ride.min_fee ?? ride.base_fee;
    const value = prices[selectedCountry] ?? Object.values(prices)[0] ?? 0;

    // Currency symbol focus: Always using $ as requested
    const symbol = '$';

    return `${symbol}${value.toLocaleString()}`;
  };

  return (
    <div className="bg-foreground/5 ring-foreground/5 group relative rounded-[2.5rem] p-1.5 ring-1 transition-transform duration-700 ring-inset hover:scale-[1.01] active:scale-[0.99] md:p-2 dark:bg-white/5">
      <div className="bg-surface ease-out-fluid relative h-[430px] w-full min-w-[280px] cursor-pointer overflow-hidden rounded-[calc(2.5rem-0.5rem)] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] md:min-w-[380px]">
        {/* Background/Primary Image (from card.image) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            alt={getLocalizedText(ride.card.title.short)}
            className="ease-out-fluid h-full w-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
            src={ride.card.image}
            loading="lazy"
          />
          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 flex h-full flex-col justify-between p-10 text-white">
          <div className="flex items-start justify-between">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md">
              {getLocalizedText(ride.category_text)}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  {t('rideCarousel.priceFrom', { price: '' }).split(' ')[0]}
                </p>
                <p className="text-accent font-display text-4xl leading-none font-black tracking-tighter italic">
                  {getDisplayPrice()}
                </p>
              </div>

              {/* Secondary Image (Vehicle Illustration) */}
              <div className="ease-out-fluid relative h-18 w-42 transition-all duration-1000 group-hover:-translate-x-4 group-hover:scale-110 group-hover:-rotate-2">
                <img
                  alt="vehicle"
                  className="h-full w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] filter"
                  src={ride.image}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <h3 className="font-display ease-out-fluid text-3xl leading-none font-bold tracking-tighter uppercase italic transition-transform duration-700 group-hover:-translate-y-1">
                {getLocalizedText(ride.card.title.short)}
              </h3>
            </div>

            <p className="mt-[-12px] line-clamp-2 max-w-[280px] text-base leading-relaxed font-medium text-white/60">
              {getLocalizedText(ride.card.description.long)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
