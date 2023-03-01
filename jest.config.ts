module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["<rootDir>/tests/**/*.(test|spec).ts"],
  // setupFiles: ["<rootDir>/tests/setup-envs.ts"],
  restoreMocks: true,
};
