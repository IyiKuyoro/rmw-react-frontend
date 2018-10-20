module.exports = {
  browser: true,
  bail: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/src/server/**',
    '!**/src/index.jsx',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  moduleFileExtensions: ['js', 'jsx', 'css'],
  moduleNameMapper: {
    '^.+\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|svg|mp4|webm|wav)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>__tests__/setup/setupEnzyme.js',
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup/',
    '<rootDir>/cypress/',
  ],
};
