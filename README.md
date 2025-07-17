<p align="center">
  <img src="https://raw.githubusercontent.com/pkorolyshyn/testing-env1/main/assets/cypress-ultimate-architecture-bdd.png">
</p>

## Cypress Ultimate Architecture (BDD Version)

This is an additional version of the [Cypress Ultimate Architecture](https://github.com/pkorolyshyn/cypress-ultimate-architecture) specifically created for teams adopting **Behavior Driven Development (BDD)**. It maintains all features from the main architecture while integrating Cypress with Cucumber via the [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor).

## 🚀 Quick Start

```bash
git clone https://github.com/pkorolyshyn/cypress-ultimate-architecture.git
cd cypress-ultimate-architecture
git checkout bdd-version
npm install
npx cypress open
```

Happy BDD Testing! 🥒😊

## ✨ What's New?

This BDD version inherits all capabilities from the original Cypress Ultimate Architecture and adds:

- 🥒 **Cucumber Integration**
- ✅ **Gherkin Linting** ensuring consistent and clean feature files
- 📊 **Allure Reporting adapted for BDD scenarios**

## 🧱 Short BDD Project Architecture Overview

Instead of `e2e` and `steps` the BDD-specific setup involves feature files `.feature` and step definitions `.steps.js` organized clearly in the `cypress/features/` directory:

```
cypress/
└── features/
    ├── login.feature
    └── login.steps.js
```

### Example: `login.feature`

```gherkin
Feature: Login form

  @login @smoke
  Scenario: Verify successful login
    Given the user is on the Login page
    When the user logs in with valid credentials
    Then the main page should be visible

  Scenario: Verify invalid email validation
    Given the user is on the Login page
    When the user enters an invalid email
    Then an invalid-email error message should appear
```

### Example: `login.steps.js`

```javascript
import loginPage from '../../pages/LoginPage.js';
import eCommercePage from '../../pages/ECommercePage.js';
import cssValues from '../../fixtures/cssValues.js';
import userData from '../../fixtures/userData.js';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('the user is on the Login page', () => {
  loginPage.visit();
});

When('the user logs in with valid credentials', () => {
  loginPage.emailInput.type(Cypress.env('email'));
  loginPage.passwordInput.type(Cypress.env('password'));
  loginPage.loginBtn.click();
});

Then('the main page should be visible', () => {
  eCommercePage.header.logo.shouldBeVisible().shouldContainText('ngx-admin');
  eCommercePage.header.userPicture.shouldBeVisible();
});

When('the user enters an invalid email', () => {
  loginPage.emailInput.type(userData.invalidEmail);
  loginPage.layout.click(true);
});

Then('an invalid-email error message should appear', () => {
  loginPage.invalidEmailError.shouldBeVisible().shouldHaveCss('color', cssValues.alerts.errorText);
});
```

## ⚙️ Cypress Cucumber Preprocessor Setup

Cucumber is integrated via [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor):

- **Cypress config setup ([cypress.config.js](https://github.com/pkorolyshyn/cypress-ultimate-architecture/blob/bdd-version/cypress.config.js)):**

```javascript
import { defineConfig } from 'cypress';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // ... other configuration settings

      // 🥒 Cucumber plugin setup
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));

      return config;
    },
  },
});
```

- **Step definitions config ([cypress-cucumber-preprocessor.config.js](https://github.com/pkorolyshyn/cypress-ultimate-architecture/blob/bdd-version/cypress-cucumber-preprocessor.config.js)):**

```javascript
export default {
  stepDefinitions: ['cypress/features/**/*.steps.{js,ts}', 'cypress/support/**/*.hooks.{js,ts}'],
};
```

## 📑 Gherkin Lint

To maintain high-quality feature files, we use [`gherkin-lint`](https://github.com/vsiakka/gherkin-lint):

```json
{
  "no-empty-file": "on",
  "no-files-without-scenarios": "on",
  "no-empty-background": "on",
  "no-dupe-feature-names": "on",
  "no-dupe-scenario-names": ["on", "in-feature"],
  "no-duplicate-tags": "on",
  "no-trailing-spaces": "on",
  "new-line-at-eof": ["on", "yes"]
}
```

These rules ensure:

- `no-empty-file` - Feature files must not be empty.
- `no-files-without-scenarios` - Each feature file must have at least one scenario.
- `no-empty-background` - Background sections must include steps.
- `no-dupe-feature-names` - Feature names must be unique.
- `no-dupe-scenario-names` (["on", "in-feature"]) - Scenario names must be unique within a feature.
- `no-duplicate-tags` - Tags must not be repeated.
- `no-trailing-spaces` - Disallows trailing whitespace.
- `new-line-at-eof (["on", "yes"])` - Requires a newline at the end of the file.

This is automatically run before each commit via Husky and lint-staged:

```json
"lint-staged": {
  "**/*.feature": ["npx gherkin-lint"]
}
```

## 🛠️ VSCode Configuration

To improve Gherkin experience, install the [Cucumber (Gherkin) Full Support plugin](https://github.com/alexkrechik/VSCucumberAutoComplete):

- Open VSCode → Extensions → Search "Cucumber (Gherkin) Full Support" → Install

Preconfigured in `.vscode/settings.json` for easy navigation from `.feature` files directly to step definitions (`CTRL` + click).

```json
{
  "cucumberautocomplete.steps": ["cypress/features/**/*.steps.{js,ts}"],
  "cucumberautocomplete.syncfeatures": "cypress/features/**/*.feature",
  "cucumberautocomplete.strictGherkinCompletion": true,
  "cucumberautocomplete.smartSnippets": true
}
```

## 📊 Allure Reporting with BDD

We use [cypress-allure-plugin](https://www.npmjs.com/package/@shelex/cypress-allure-plugin) to adapt Allure reporting for BDD scenarios:

```javascript
import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer.js';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // ... other configuration settings

      // 📊 Configure Allure reporter with system and runtime metadata
      config.env.allure = true;
      config.env.allureReuseAfterSpec = true;
      allureWriter(on, config);

      return config;
    },
  },
});
```

### 🧩 How Allure Metadata Integration Works (`allureMeta.hooks.js`)

This framework connects scenario tags from your `.feature` files (e.g., `@CAL-101`) to structured Allure metadata using the `AllureMeta` helper class. Here's how it works:

- Your `.feature` files contain plain tags (e.g., `@CAL-101`) to identify scenarios.
- Each tag corresponds to a `Before` hook defined in `allureMeta.hooks.js`, where Allure metadata like feature, story, severity, and ticket information is defined.
- When running tests, the `Before` hook is triggered by the matching tag and applies metadata to the Allure report automatically.

#### Example usage:

`.feature` file:

```gherkin
@CAL-101 @calendar @smoke
Scenario: Verify current date is displayed as selected by default
  Given the user is on the Calendar page
  Then the selected date should be today
```

Corresponding `allureMeta.hooks.js` entry:

```javascript
Before({ tags: '@CAL-101' }, () => {
  new AllureMeta({
    feature: 'Calendar',
    story: 'Default selected date should be today',
    ticket: 'CAL-101',
    tags: ['calendar', 'smoke'],
    severity: 'critical',
  }).apply();
});
```

This approach keeps your scenarios clean and ensures Allure reports contain rich, structured metadata automatically.

## 📁 Related Projects

- [Main Cypress Ultimate Architecture](https://github.com/pkorolyshyn/cypress-ultimate-architecture) — includes all core features without BDD setup
