/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withLess = require('next-with-less');

const plugins = [
  [
    withLess,
    { lessLoaderOptions: { lessOptions: { javascriptEnabled: true } } },
  ],
];

const nextConfig = withPlugins(plugins, {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
});

module.exports = nextConfig;
