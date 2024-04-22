import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  // Общие правила для всех файлов JavaScript
  {
    files: ["*.js"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    ...pluginJs.configs.recommended,
    ...eslintPluginPrettierRecommended,
    rules: {
      "no-unused-vars": "warn",
    },
  },
  // Правила для тестовых файлов
  {
    files: ["**/*.test.js"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
];
