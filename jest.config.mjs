/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.(ts|tsx)$': [ '@swc/jest' ],
  },
  setupFiles: [
    '<rootDir>/test/scrollto.js',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  moduleNameMapper: {
    '.(css|less|scss)$': require.resolve('./test/style.module.js'),
    '.(jpg|svg)$': require.resolve('./test/style.module.js'),
    '.(jpg|svg)?webp$': require.resolve('./test/style.module.js'),
  },
};

export default config;
