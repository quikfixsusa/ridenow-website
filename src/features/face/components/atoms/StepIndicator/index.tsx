'use client';

import React from 'react';
import { ProgressBar } from '@heroui/react';

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const progressValue = (currentStep / 4) * 100;

  return (
    <div className="w-full bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-lg flex-col gap-2">
        <div className="flex justify-between items-end">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Step {currentStep} of 4
          </span>
          <span className="text-xs font-medium text-default-400">
            {Math.round(progressValue)}% Complete
          </span>
        </div>
        <ProgressBar 
          aria-label="Verification progress" 
          value={progressValue} 
          size="sm" 
          color="accent"
        />
      </div>
    </div>
  );
};
