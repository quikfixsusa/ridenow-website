import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg">
        <span className="text-2xl font-black italic">RN</span>
      </div>
      <span className="text-2xl font-black tracking-tighter text-foreground">
        Ride<span className="text-accent">Now</span>
      </span>
    </div>
  );
};
