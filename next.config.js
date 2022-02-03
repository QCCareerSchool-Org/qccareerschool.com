const withPurgeCss = require('next-purgecss');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'studentcenter.qccareerschool.com',
      'aeea626a74ffdd96fbcf-77df9cf355bf5239094a1d99115ccf2c.ssl.cf1.rackcdn.com',
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

module.exports = withPurgeCss(nextConfig);
