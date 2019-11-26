const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');
module.exports = withSass(withCss(optimizedImages(withOffline())));
