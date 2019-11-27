const CopyPlugin = require('copy-webpack-plugin');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');

const nextConfig = {
  // target: 'serverless',
  // transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // // turn on the SW in dev mode so that we can actually test it
  
  webpack: (config) => {
    // this will output your push listener file to .next folder
    // check CopyWebpackPlugin docs if you want to change the destination (e.g. /static or /.next/static)
    config.plugins.push(new CopyPlugin([
      { from: './src/sw-push-listener.js', to: './static' },
    ]));
    return config;
  },
  generateInDevMode: true,
  workboxOpts: {
    importScripts: [ './sw-push-listener.js' ],
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

module.exports = withSass(withCss(optimizedImages(withOffline(nextConfig))));
