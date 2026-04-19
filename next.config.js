/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
