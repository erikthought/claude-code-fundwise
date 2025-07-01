import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ['@clerk/nextjs'],
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  trailingSlash: false,
};

export default nextConfig;
