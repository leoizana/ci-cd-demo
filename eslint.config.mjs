import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      // Project runs in Node; include Node globals (require/module) and keep browser globals if needed
      globals: { ...globals.node, ...globals.browser },
    },
  },
  {
    // Tests need Jest globals (test, expect)
    files: ["**/__tests__/**", "**/*.test.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
    },
  },
]);
