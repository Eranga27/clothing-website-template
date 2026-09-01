/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      }
    ],
  },
  transpilePackages: ['lucide-react'],
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
}

module.exports = nextConfig
