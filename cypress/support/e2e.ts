// ✅ This is the global support file for Cypress E2E tests.
// It is automatically loaded before any test runs.
//
// Here's what it does:
//
// - Imports Cypress commands (unused in this framework, but still required by Cypress default structure)
// - Registers Allure reporting via `allure-cypress`
// - Enables real DOM interactions with `cypress-real-events` (used for things like .realMouseMove)
// - Adds support for test filtering using @cypress/grep (e.g., running only @smoke or @login tagged tests)

import './commands';
import 'allure-cypress';
import 'cypress-real-events/support';
import registerCypressGrep from '@cypress/grep/src/support';
registerCypressGrep();

// This block hides unnecessary noise from the Cypress command log.
// If the config value `hideXHRInCommandLog` is enabled, it dynamically injects CSS
// to hide network-related log entries (like XHRs and redirects) from the test runner UI.
// This helps keep the command log clean and focused on meaningful test actions.
//
// By default, `hideXHRInCommandLog` is set to false.
// You can enable it by setting it to `true` in your cypress.config.ts file

if (Cypress.env('hideXHRInCommandLog')) {
  const app = window.top as Window;
  const doc = app?.document;

  if (doc && !doc.head.querySelector('[data-hide-command-log-request]')) {
    const style = doc.createElement('style');
    style.setAttribute('data-hide-command-log-request', '');
    style.textContent = `
      .command-name-request,
      .command-name-xhr,
      .command-name-new-url {
        display: none !important;
      }
    `;
    doc.head.appendChild(style);
  }
}
