////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  verbose: true,
  testMatch: ['**/test/**/*.test.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^@qubit-ltd/type-detect/src/(.*)$': '<rootDir>/node_modules/@qubit-ltd/type-detect/src/$1',
  },
  transform: {
    '\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@qubit-ltd/type-detect)',
    '<rootDir>/dist/',
  ],
  setupFilesAfterEnv: [
    'jest-extended/all',
  ],
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['src/index.js', 'src/impl/'],
};
