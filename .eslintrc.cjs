module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  "parser": "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:solid/typescript"],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "solid"
  ],
  rules: {
    "no-unused-vars": "off",
    "no-use-before-define": "warn",
    "semi": ["warn", "always"],
    "quotes": ["warn", "double"]
  }
}
