import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'socialify.git.ci',
        port: '',
        pathname: '/**', // Matches all paths under this domain
      },
    ],
  },
};

export default nextConfig;
