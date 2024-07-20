/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // (A)
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // (B)
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: [
    "node_modules/",
    ".next/",
    "out/",
    "public/",
    ".eslintrc.cjs",
    ".prettierrc.cjs",
  ],
};
