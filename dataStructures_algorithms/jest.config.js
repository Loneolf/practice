/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  
  collectCoverage: true,

  coverageDirectory: "coverage",

  // roots: [
  //   "./test"
  // ],
  testEnvironment: "jsdom",

  testPathIgnorePatterns: [
    "/node_modules/"
  ],

};

module.exports = config;
