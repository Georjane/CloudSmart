import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';

export default [
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: eslintPluginReact,
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],

      // ✅ Correct new-style reference for the TypeScript rule
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  },
];
