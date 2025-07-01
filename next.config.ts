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
  experimental: {
    serverComponentsExternalPackages: ['@clerk/nextjs'],
  },
  webpack: (config: any) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: false,
    };
    return config;
  },
};

export default nextConfig;
