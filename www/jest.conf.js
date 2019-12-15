const path = require('path')

// TODO: Modulable test conf
module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    "ts",
    "js",
    //"vue"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    "\\.(ts)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    //".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  "mapCoverage": true,
//   "snapshotSerializers": [
//     "<rootDir>/node_modules/jest-serializer-vue"
//   ],
  setupFiles: ['<rootDir>/'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,ts}',//,vue
    '!src/app.js',
    //'!src/router/index.js',
    '!**/node_modules/**'
  ]
}