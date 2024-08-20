import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add Node.js globals here
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
