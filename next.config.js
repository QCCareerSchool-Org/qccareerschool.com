const withSass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');
module.exports = withSass(optimizedImages(withOffline()));
