import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['rlp6blss-3001.uks1.devtunnels.ms', 'localhost:3001'],
    },
  },
  async redirects() {
    return [
      {
        source: '/auth/reset-password',
        destination: '/auth/actions',
        permanent: false,
      },
      {
        source: '/auth/verify-email',
        destination: '/auth/actions',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
