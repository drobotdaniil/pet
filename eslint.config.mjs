import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.plugins("@typescript-eslint", "prettier"),
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ),
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",

      "react/no-array-index-key": "warn",

      "prettier/prettier": "warn",

      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: ["@mui/material/*"],
        },
      ],
    },
  },
];

export default eslintConfig;
