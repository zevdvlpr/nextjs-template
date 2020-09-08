const bundleAnalyzer = require('@next/bundle-analyzer');
const sourceMaps = require('@zeit/next-source-maps');
const composePlugins = require('next-compose-plugins');

const { ANALYZE } = process.env;

module.exports = composePlugins(
  [
    [sourceMaps],
    [
      bundleAnalyzer,
      {
        enabled: !!ANALYZE,
      },
    ],
  ],
  {
    distDir: 'dist',
    devIndicators: {
      autoPrerender: false,
    },
    experimental: {
      jsconfigPaths: true,
    },
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  },
);
