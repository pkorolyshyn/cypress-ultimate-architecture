import { defineConfig } from 'cypress';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import allureWriter from '@shelex/cypress-allure-plugin/writer.js';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/features/**/*.feature',
    defaultCommandTimeout: 10000, // ⏱ Default timeout (in ms) for Cypress commands like `.get()` and `.click()` etc.
    hideXHRInCommandLog: false, // 🧹 When true, hides XHR requests from Cypress command log (controlled manually in e2e.ts)
    retries: {
      runMode: 2, // for CI runs
      openMode: 0, // for local runs
    },
    reporterOptions: {
      outputDir: 'allure-results',
    },
    async setupNodeEvents(on, config) {
      // Determine which environment config to load when you launch Cypress (defaults to 'env1' if not set)
      // Example of usage:
      //   npx cypress open --env envName=env2
      //   → Will load cypress.env2.ts (URL, email, password, etc. come from there)
      const envName = config.env.envName || 'env1';

      // Load environment-specific values from a file like `cypress.env1.ts`
      const settings = (await import(`./cypress.${envName}.ts`)).default;

      // Inject baseUrl and env variables from selected env file
      config.baseUrl = settings.baseUrl;
      config.env = {
        ...config.env,
        ...settings.env,
      };

      // 🥒 Cucumber plugin setup
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));

      // 📊 Configure Allure reporter with system and runtime metadata
      config.env.allure = true;
      config.env.allureReuseAfterSpec = true;
      allureWriter(on, config);

      return config;
    },
  },
});
