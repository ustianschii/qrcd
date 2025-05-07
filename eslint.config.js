import eslint from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist", "node_modules", "coverage"] },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      prettierConfig,
    ],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      importPlugin,
      prettier,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-console": "warn",
      "no-unreachable": "error",
      "require-await": "error",
      "prettier/prettier": "error",
      "react/prop-types": "off",
      "react/button-has-type": "error",
      "react/checked-requires-onchange-or-readonly": "error",
      "react/hook-use-state": "error",
      "react/jsx-boolean-value": "error",
      "react/jsx-fragments": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/no-array-index-key": "warn",
      "react/no-danger": "error",
      "react/self-closing-comp": "error",
      "react-hooks/exhaustive-deps": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: ["../"],
        },
      ],
      "import/no-unresolved": "off",
      "import/no-named-as-default-member": "off",
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          groups: [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "~/**/**",
              group: "parent",
              position: "before",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.test.*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
