import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        plugins: { js },
        extends: ["js/recommended"],
        rules: {
            semi: ["error", "always"],
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        languageOptions: { globals: globals.node },
    },
    tseslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
]);
