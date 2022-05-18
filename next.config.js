/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [8001],
    domains: ["images.unsplash.com"],
    imageSizes: [400, 800, 1200],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
