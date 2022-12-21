/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.(ts|tsx|js)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src/$1"
  },
  moduleDirectories: ["node_modules", "src"],
  
};

module.exports = config;