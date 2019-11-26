const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');
module.exports = withSass(withCss(optimizedImages(withOffline({
  // generateInDevMode: true,
  // workboxOpts: {
  //   swDest: 'static/service-worker.js',
  //   runtimeCaching: [
  //     {
  //       urlPattern: /^https?.*/,
  //       handler: 'NetworkFirst',
  //       options: {
  //         cacheName: 'https-calls',
  //         networkTimeoutSeconds: 15,
  //         expiration: {
  //           maxEntries: 150,
  //           maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
  //         },
  //         cacheableResponse: {
  //           statuses: [0, 200],
  //         },
  //       },
  //     },
  //   ],
  // },
}))));
