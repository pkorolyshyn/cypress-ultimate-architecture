// This file provides additional declarations to help
// TypeScript understand code imported from external modules.
//
// Why this file is important:
//  - TypeScript sometimes can't infer types from external plugins or global objects.
//  - Without this file, TypeScript would show errors or lose auto-completion.
//  - Clearly documenting custom modules and global extensions helps maintainability.

// Fixes "Cannot find module '@cypress/grep/src/support' or its corresponding type declarations." error for cypress/grep plugin.
declare module '@cypress/grep/src/support' {
  import registerCypressGrep from '@cypress/grep';
  export default registerCypressGrep;
}

// Fixes "Cannot find module 'allure-cypress/reporter' or its corresponding type declarations." error for allure-cypress plugin.
declare module 'allure-cypress/reporter' {
  const allureCypress: any;
  export { allureCypress };
}

declare module 'eslint-plugin-cypress';
declare module '@typescript-eslint/parser';

// Allow `hideXHRInCommandLog` in Cypress config without errors.
declare namespace Cypress {
  interface EndToEndConfigOptions {
    hideXHRInCommandLog?: boolean;
  }
}
