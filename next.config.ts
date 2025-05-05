import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXTAUTH_SECRET: 'olympique lyonnais',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.entropiawiki.com',
        port: '',
        pathname: '/images/gallery/**',
      },
    ],
  },
};

export default nextConfig;
