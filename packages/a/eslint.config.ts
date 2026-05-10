// Not `include`d in tsconfig.json, but included in allowDefaultProject.

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

declare global {
  interface ImportMeta {
    dirname: string;
  }
}

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.ts"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
