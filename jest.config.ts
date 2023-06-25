import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  // testEnvironment: 'jsdom',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}

export default config
