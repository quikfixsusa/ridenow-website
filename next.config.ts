import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['rlp6blss-3001.uks1.devtunnels.ms', 'localhost:3001'],
    },
  },
};

export default nextConfig;
