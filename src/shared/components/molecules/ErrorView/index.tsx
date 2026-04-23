import React from 'react';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

export const ErrorView: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100/10 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <h2 className="mb-2 text-2xl font-bold font-display text-white">Action Failed</h2>
      <p className="mb-8 max-w-md text-gray-400">
        The link you used is invalid, expired, or has already been used. Please try requesting a new one.
      </p>
      <Button
        variant="primary"
        onPress={() => router.push('/')}
        className="font-medium"
      >
        Return to Home
      </Button>
    </div>
  );
};

export default ErrorView;
