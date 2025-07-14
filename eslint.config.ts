// ✅ ESLint Flat Config
//
// This configuration is designed to enforce clean, consistent, and professional code
// across both general TypeScript files and Cypress test files.

import prettierConfig from 'eslint-config-prettier';
import cypressPlugin from 'eslint-plugin-cypress';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').FlatConfig[]} */
export default [
  // Base TS files (Prettier + best practices)
  {
    files: ['**/*.ts'], // Apply this block to all TS files in the project
    languageOptions: {
      ecmaVersion: 'latest', // Enable modern ECMAScript syntax
      sourceType: 'module',
      parser: await import('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin')).default,
      prettier: prettierPlugin, // Enable Prettier plugin to enforce formatting
    },
    rules: {
      ...prettierConfig.rules, // Disable conflicting ESLint rules with Prettier
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      'prettier/prettier': 'error', // Report Prettier formatting issues as ESLint errors
      'no-console': 'warn', // Warn on console.log usage (optional during dev)
      eqeqeq: ['error', 'always'], // Enforce use of === and !== instead of == and !=

      // Prevent committing focused test blocks (common mistake in Cypress)
      'no-restricted-syntax': [
        'error',
        {
          selector: "CallExpression[callee.object.name='it'][callee.property.name='only']",
          message: '`it.only` is not allowed. Avoid committing focused tests.',
        },
        {
          selector: "CallExpression[callee.object.name='describe'][callee.property.name='only']",
          message: '`describe.only` is not allowed. Avoid committing focused tests.',
        },
      ],
    },
  },

  // Cypress-specific config
  {
    files: ['cypress/**/*.ts'],
    plugins: {
      cypress: cypressPlugin, // Enable Cypress plugin to access custom rules
    },
    languageOptions: {
      globals: {
        ...cypressPlugin.environments.globals.globals,
      },
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'error', // Disallow unnecessary use of cy.wait()
      'cypress/no-assigning-return-values': 'error', // Prevent assigning Cypress chains to variables
    },
  },
];
