/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/overview',
        destination: '/',
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
};
