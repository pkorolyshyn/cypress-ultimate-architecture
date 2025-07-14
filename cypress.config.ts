import { defineConfig } from 'cypress';
import { allureCypress } from 'allure-cypress/reporter';
import os from 'node:os';

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, // ⏱ Default timeout (in ms) for Cypress commands like `.get()` and `.click()` etc.
    hideXHRInCommandLog: false, // 🧹 When true, hides XHR requests from Cypress command log (controlled manually in e2e.ts)
    retries: {
      runMode: 2, // for CI runs
      openMode: 0, // for local runs
    },
    reporterOptions: {
      outputDir: 'allure-results',
    },
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      // Determine which environment config to load when you launch Cypress (defaults to 'env1' if not set)
      // Example of usage:
      //   npx cypress open --env envName=env2
      //   → Will load cypress.env2.ts (URL, email, password, etc. come from there)
      const envName = config.env.envName || 'env1';

      // Load environment-specific values from a file like `cypress.env1.ts`
      const settings = (await import(`./cypress.${envName}.ts`)).default;

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
          env: envName, // Current test environment (e.g. 'env1')
        },
      });

      return config;
    },
  },
});
