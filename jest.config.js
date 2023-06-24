// jest.config.js

module.exports = {
  // testEnvironment: 'jsdom',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
