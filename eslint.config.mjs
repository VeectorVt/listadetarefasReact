import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  {parser:'@babel/eslint-parser'},
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  pluginReact.configs.flat.recommended,
]);