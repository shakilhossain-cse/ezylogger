module.exports = {
    env: {
      node: true,
      es6: true, 
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  };
  