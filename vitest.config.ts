/// <reference types="vitest" />
import path from "path";

import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    css: true,
    coverage: {
      exclude: [
        ...(configDefaults.coverage.exclude as string[]),
        "src/features/structureExample",
        "src/utils/testUtils.tsx",
        "src/styles/theme",
        "src/main.tsx",
        "src/i18n.ts",
        "**/index.ts",
        "eslint",
      ],
      reporter: ["lcov", "text", "text", "clover", "json"],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
