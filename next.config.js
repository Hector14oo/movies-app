/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.revistagq.com',
      },
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
      },
    ],
  },
};

module.exports = nextConfig;
