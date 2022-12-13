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
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://code-challenge-mid.vercel.app/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
