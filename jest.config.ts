/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleDirectories: ["node_modules", "src"],
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/*.(test|spec).ts"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
