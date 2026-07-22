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
        source: '/.well-known/apple-app-site-association',
        destination: '/api/.well-known/apple-app-site-association',
        permanent: false,
      },
      {
        source: '/.well-known/assetlinks',
        destination: '/api/.well-known/assetlinks',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
