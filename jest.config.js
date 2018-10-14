module.exports = {
  verbose: true,
  browser: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  moduleFileExtensions: ['js', 'jsx', 'css'],
  moduleNameMapper: {
    '^.+\\.(css)$': 'identity-obj-proxy',
    '^Pages(.*)$': '<rootDir>/src/pages$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
  },
  setupTestFrameworkScriptFile: '<rootDir>__tests__/setup/setupEnzyme.js',
  testPathIgnorePatterns: ['<rootDir>/__tests__/setup/', '<rootDir>/cypress/'],
};
