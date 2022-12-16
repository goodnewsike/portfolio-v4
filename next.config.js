/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ["a0.muscache.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(new webpack.EnvironmentPlugin({MapboxAccessToken: ''}));

    return config
  },
  // env: {
  //   NEXT_PUBLIC_RESUME_LINK: '1Y5ttDgKB_Q3NVjPe5lzKZxYOrP7nEX5v',
  // },
  // pwa: {
  //   dest: 'public',
  //   disable: process.env.NODE_ENV === 'development',
  // },
}

module.exports = nextConfig
