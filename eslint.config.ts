import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  eslintPluginAstro.configs.all,
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      "dist/",
      "node_modules/",
      "**/.*",
      "**/.astro/content.d.ts",
      "**/.astro/types.d.ts",
    ],
    rules: {
      // Override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
);
