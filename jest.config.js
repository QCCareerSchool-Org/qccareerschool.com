module.exports = {
  roots: [
    '<rootDir>/test',
  ],
  testMatch: [
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style.module.js'),
    '\\.scss$': require.resolve('./test/style.module.js'),
    '\\.jpg$': require.resolve('./test/style.module.js'),
    '\\.svg$': require.resolve('./test/style.module.js'),
  },
};
