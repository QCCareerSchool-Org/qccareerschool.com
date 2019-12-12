module.exports = {
  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  testMatch: ["**/__tests__/*.(ts|tsx)"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': require.resolve('./test/style.module.js'),
    '\\.(jpg|svg)$': require.resolve('./test/style.module.js'),
  },
};
