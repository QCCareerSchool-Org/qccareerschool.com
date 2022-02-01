// const withCss = require('@zeit/next-css');
// const withSass = require('@zeit/next-sass');
const CopyPlugin = require('copy-webpack-plugin');
// const withOffline = require('next-offline');
const optimizedImages = require('next-optimized-images');
const withPurgeCss = require('next-purgecss');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },

  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it

  webpack: (config, { isServer }) => {
    // https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js');
      }
      return entries;
    };

    // this will output the push listener file to .next/static folder
    config.plugins.push(new CopyPlugin([
      { from: './src/sw-push-listener.js', to: './static' },
    ]));

    return config;
  },
  generateInDevMode: true,
  workboxOpts: {
    importScripts: [ '/_next/static/sw-push-listener.js' ],
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/u,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [ 0, 200 ],
          },
        },
      },
    ],
  },
  purgeCssPaths: [
    'src/**/*',
    // 'src/pages/**/*',
    // 'src/components/**/*',
    // 'src/layouts/**/*',
  ],
  purgeCss: {
    whitelistPatterns: () => [ /^nav-/u, /^navbar-/u, /^dropdown-/u ],
    whitelist: () => [
      'nav',
      'navbar',
      'dropdown',
      'tab-content',
      'tab-pane',
      'fade',
      'active',
      'collapsing',
      'collapse',
      'show',
    ],
  },
};

module.exports = optimizedImages(withPurgeCss(nextConfig));
