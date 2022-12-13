/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marleyspoon.com',
        port: '',
        pathname: '/media/recipes/**',
      },
    ],
  },
};

module.exports = nextConfig;
