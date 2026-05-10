// `include`d in tsconfig.json, not set in allowDefaultProject.
// Should not error with "eslint.config.ts was included by allowDefaultProject but also was found in the project service. Consider removing it from allowDefaultProject"

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
