/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Blog article covers are still hosted on Unsplash.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
