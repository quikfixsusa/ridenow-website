import React from 'react';

export const SpinLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-12 w-12">
        <div className="absolute h-full w-full rounded-full border-4 border-gray-200 opacity-20"></div>
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-primary border-t-transparent shadow-lg"></div>
      </div>
    </div>
  );
};

export default SpinLoader;
