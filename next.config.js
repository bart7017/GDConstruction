/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    turbo: {},
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};
