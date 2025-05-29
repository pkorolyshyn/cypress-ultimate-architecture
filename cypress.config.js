const { defineConfig } = require('cypress');
const { allureCypress } = require('allure-cypress/reporter');
const os = require('node:os');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, // ⏱ Default timeout (in ms) for Cypress commands like `.get()` and `.click()` etc.
    hideXHRInCommandLog: false, // 🧹 When true, hides XHR requests from Cypress command log (controlled manually in e2e.js)
    retries: {
      runMode: 2, // for CI runs
      openMode: 0, // for local runs
    },
    reporterOptions: {
      outputDir: 'allure-results',
    },
    setupNodeEvents(on, config) {
      // Determine which environment config to load when you launch Cypress (defaults to 'env1' if not set)
      // Example of usage:
      //   npx cypress open --env envName=env2
      //   → Will load cypress.env2.js (URL, email, password, etc. come from there)
      const envName = config.env.envName || 'env1';

      // Load environment-specific values from a file like `cypress.env1.js`
      const settings = require(`./cypress.${envName}.js`);

      //  Inject baseUrl and env variables from selected env file
      config.baseUrl = settings.baseUrl;
      config.env = {
        ...config.env,
        ...settings.env,
      };

      // 📊 Configure Allure reporter with system and runtime metadata
      allureCypress(on, config, {
        resultsDir: 'allure-results',
        environmentInfo: {
          os_platform: os.platform(), // e.g. 'win32' or 'darwin'
          os_release: os.release(), // e.g. '10.0.19045'
          os_version: os.version(), // full OS version string
          node_version: process.version, // Node.js version used
          browser: config.browserName, // Browser name (e.g. chrome, edge)
          browserVersion: config.browserVersion, // Browser version
          env: envName, // Current test environment (e.g. 'env1')
        },
      });

      return config;
    },
  },
});
