/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: ".",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
