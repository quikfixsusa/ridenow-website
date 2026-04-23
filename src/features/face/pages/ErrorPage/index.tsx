'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

export const ErrorPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center gap-10">
      <div className="relative">
        <div className="absolute -inset-8 bg-danger/5 rounded-full animate-pulse"></div>
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-danger/10 text-danger shadow-inner">
          <span className="material-symbols-rounded text-7xl">cancel</span>
        </div>
      </div>

      <div className="space-y-4 max-w-xs">
        <h1 className="text-4xl font-black text-default-900 tracking-tighter">Verification Failed</h1>
        <p className="text-lg text-default-500 leading-relaxed font-medium">
          Something went wrong during the verification process. Please try again or contact support.
        </p>
      </div>

      <div className="w-full max-w-xs pt-4 flex flex-col gap-4">
        <Button
          onPress={() => router.push('/face')}
          variant="primary"
          size="lg"
          className="w-full h-16 font-bold text-lg shadow-xl shadow-primary/20"
        >
          <span className="material-symbols-rounded">refresh</span>
          Try Again
        </Button>
        <Button
          onPress={() => router.push('/')}
          variant="ghost"
          size="lg"
          className="w-full h-16 font-bold text-lg"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};
