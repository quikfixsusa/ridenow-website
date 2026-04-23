'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

export const SuccessPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center gap-10">
      <div className="relative">
        <div className="absolute -inset-8 bg-success/5 rounded-full animate-pulse"></div>
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-success/10 text-success shadow-inner">
          <span className="material-symbols-rounded text-7xl">check_circle</span>
        </div>
      </div>

      <div className="space-y-4 max-w-xs">
        <h1 className="text-4xl font-black text-default-900 tracking-tighter">Verification Complete</h1>
        <p className="text-lg text-default-500 leading-relaxed font-medium">
          Your identity has been successfully verified. You can now continue with your journey.
        </p>
      </div>

      <div className="w-full max-w-xs pt-4">
        <Button
          onPress={() => router.push('/')}
          variant="primary"
          size="lg"
          className="w-full h-16 font-bold text-lg shadow-xl shadow-primary/20"
        >
          Return to Home
          <span className="material-symbols-rounded">arrow_forward</span>
        </Button>
      </div>
    </div>
  );
};
