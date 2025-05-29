<p align="center">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/61518906/448611332-ccd592a3-2040-40ee-8881-4cffeb0e271d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250528%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250528T222906Z&X-Amz-Expires=300&X-Amz-Signature=88e358afc45a6ae5e1e9fc40ce2e992fca71cdd165e148c352323bd158c0531f&X-Amz-SignedHeaders=host">
  </p>
<p align="center">
  <img src="https://img.shields.io/badge/cypress-14.3.3-brightgreen.svg">
  <img src="https://img.shields.io/badge/report-Allure-ff69b4.svg?style=flat">
  <img src="https://img.shields.io/badge/code_style-ESLint-4B32C3.svg">
  <img src="https://img.shields.io/badge/git_hooks-Husky-blue.svg">
  <img src="https://img.shields.io/badge/docker-supported-blue.svg?logo=docker">
  <img src="![CI](https://github.com/pkorolyshyn/cypress-ultimate-architecture/actions/workflows/cypress-e2e.yml/badge.svg)">
  <img src="https://img.shields.io/github/stars/pkorolyshyn/cypress-ultimate-architecture?style=social">
</p>

**Cypress Ultimate Architecture** is a ready-to-use, production-level Cypress test automation framework designed to kick-start your next QA automation project. It provides a clean, scalable structure that you can easily customize and extend according to your project’s needs.

## 🚀 Quick Start

```bash
git clone https://github.com/pkorolyshyn/cypress-ultimate-architecture.git
cd cypress-ultimate-architecture
npm install
npx cypress open
```

Happy Testing! 😊

## Why Use This Framework?

This framework gives you a head-start by providing a scalable and flexible testing foundation, built on widely used best practices. It's designed for real projects—whether you're running small personal apps or scaling enterprise applications with thousands of tests.

Instead of struggling to figure out "the best way," you’ll immediately benefit from a proven, maintainable Cypress setup.

## ✨ Features Included:

- 🧩 **Page Object Model (POM)**
  <br>Clearly structured, maintainable tests—no messy selectors or repetitive logic.
  <br>[Explore Pages →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/tree/main/cypress/pages)

- 🎯 **Reusable Cypress Wrappers**
  <br>Smart element wrappers help keep your tests clean and readable.
  <br>[Explore Wrappers →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/tree/main/cypress/support/elements)

- 🐾 **Steps Approach**
  <br>Write high-level, reusable test steps, clearly separating logic from implementation details.
  <br>[Explore Steps →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/tree/main/cypress/steps)

- 📊 **Allure Test Reporting**
  <br>Professional, interactive reports that make debugging easy (and your reports beautiful).
  <br>[Explore Allure Report →](https://pkorolyshyn.github.io/cypress-ultimate-architecture/)

- 🌍 **Flexible Environment Handling**
  <br>Easily switch between testing environments—local, staging, production.
  <br>[Explore Environment Handling →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/blob/main/cypress.env1.js)

- 🏷️ **Cypress Grep Support**
  <br>Run only the tests you need with flexible tagging.
  <br>[Explore Grep Tags Usage Example →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/blob/main/cypress/e2e/calendarTests.cy.js)

- 🧹 **Modern JavaScript Quality (ESLint + Prettier)**
  <br>Maintain clean code standards automatically.
  <br>[Explore ESLint Configuration →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/blob/main/eslint.config.mjs)
  <br>[Explore Prettier Configuration →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/blob/main/.prettierrc)

- 🐶 **Git Hooks (Husky)**
  <br>Automatically catch formatting and linting issues before they enter your repo.
  <br>[Explore Husky pre-commit Hooks →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/tree/main/.husky)

- 🐳 **Dockerized CI (GitHub Actions)**
  <br>A ready-to-go CI pipeline, generating reliable and consistent results for every commit.
  <br>[Explore Dockerfile →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/blob/main/Dockerfile)

## 🧱Short Project Architecture Overview

This section explains how the framework is structured, what each folder or file is responsible for, and how it all connects. You can use this as a reference when modifying or extending the project.

```
ARCHITECTURE
│
├── .github/                 → GitHub Actions workflows (CI, Allure, Pages)
├── .husky/                  → Git hooks for linting/formatting before commits
│
├── cypress/
│   ├── components/          → Reusable UI parts (e.g., dialogs, header)
│   ├── core/                → Base classes for POM structure
│   │   ├── BaseObject.js          → Wrapper selector helpers
│   │   ├── BaseComponent.js       → Shared base for components
│   │   └── BasePage.js            → Abstract class for page objects
│   ├── downloads/           → Auto-generated downloaded files (e.g. CSV, PDF)
│   ├── e2e/                 → Actual Cypress test files
│   ├── fixtures/            → Static test data and style constants
│   ├── pages/               → Page objects (LoginPage, CalendarPage, etc.)
│   ├── steps/               → Reusable high-level test steps
│   └── support/
│       ├── elements/        → Reusable element wrappers
│       │   ├── SingleElement.js
│       │   ├── InputElement.js
│       │   └── MultiElement.js
│       ├── utils/           → Test utilities
│       │   ├── DateUtils.js
│       │   └── AllureMetaUtils.js
│       └── e2e.js           → Global setup (Allure, grep, log cleanup)
│
├── cypress.env1.js          → Environment-specific config (baseUrl, creds)
├── cypress.env2.js
├── .env                     → Example local secrets (⚠️ Do not commit real data)
├── Dockerfile               → Run Cypress + Allure in a container
├── eslint.config.js         → Code quality rules (Flat config)
├── .prettierrc              → Code formatting rules
├── package.json             → Project scripts, dependencies, metadata
└── README.md                → Project overview and documentation
```

### `.github/`

Contains GitHub-specific configurations, including CI workflows like running Cypress tests, generating Allure reports, and publishing them to GitHub Pages.

> This is where CI/CD magic happens.

---

### `.husky/`

Git hook configurations using [Husky](https://typicode.github.io/husky/).
Runs automatic checks (like linting and formatting) before commits to keep the codebase clean.

---

### `cypress/components/`

This folder contains reusable UI components used inside pages — like dialogs, modals, or headers.
They’re composed inside `pages/` to represent smaller parts of a full page.

---

### `cypress/core/`

Core base classes shared across the framework.

- `BaseObject.js` – Provides `.select()` and `.selectInput()` helpers to return wrapped Cypress elements.
- `BaseComponent.js` – A minimal extension of BaseObject used for common logic component classes.
- `BasePage.js` – The abstract class that all page objects inherit from. All common pages logic should be here.

---

### `cypress/e2e/`

Your actual test files live here. Each test file corresponds to a feature or page and imports both:

- Page objects (from `pages/`)
- Step definitions (from `steps/`)

---

### `cypress/fixtures/`

Static or shared test data. Can be used to store expected results, constants, styles, or mock API responses.

---

### `cypress/pages/`

Contains Page Object classes. Each file represents a specific screen or route in the app, exposing elements and composed components for test use.

Examples:

- `LoginPage.js`
- `CalendarPage.js`
- `SmartTablePage.js`

Each page extends `BasePage` and defines selectors + UI composition.

---

### `cypress/steps/`

Reusable test steps organized by page or feature.
They keep your test logic clean by hiding repetitive Cypress calls behind readable actions.

---

### `cypress/support/`

Shared utilities and wrappers that enhance Cypress behavior.

#### `elements/`

Custom wrappers that add helpful assertion and action methods to elements.

- `SingleElement.js` – Used for single DOM elements. Wraps Cypress methods.
- `InputElement.js` – Extends SingleElement and adds input-specific helpers like `.type()` and `.shouldHavePlaceholder()`.
- `MultiElement.js` – Used for collections of elements (e.g., table rows). Wraps Cypress methods for working with multiple elements.

#### `utils/`

Project-wide helpers.

- `DateUtils.js` – Formats or returns the current date.
- `AllureMetaUtils.js` – A helper to inject Allure metadata like tags, severity, and ticket links for each test.

---

### `.env`

✅ This file is committed only as an example.
You should not commit real passwords or secrets.

It's used to demonstrate how you can manage environment-specific variables (like login credentials) locally via dotenv.

---

### `cypress.env1.js / cypress.env2.js`

Configuration files for switching between environments (`env1`, `env2`, etc).
Define your `baseUrl`, test user credentials, and any custom env values for Cypress.

You can run a specific config with:

```bash
npx cypress run --env envName=env2
```

---

### `Dockerfile`

Defines a complete containerized environment for running Cypress and generating Allure reports in CI.
Includes:

- Cypress with browsers
- Java (for Allure)
- All dependencies and commands to run tests + generate reports

---

### `eslint.config.js`

Configures ESLint with:

- Prettier integration
- Best practice rules
- Cypress-specific linting
- CI-friendly restrictions (e.g., no `it.only`)

It helps maintain consistent, high-quality code across the framework.

## 📊 Allure Reporting

This project uses Allure to generate clean, interactive, and shareable test reports after every Cypress run.

- After each CI test run, the framework generates an Allure HTML report.

- The report is attached as a downloadable artifact inside the GitHub Actions pipeline.

- The same report is also published to the gh-pages branch so it’s viewable online.

### 🌐 Allure Live Demo:

- [View Latest Report →](https://pkorolyshyn.github.io/cypress-ultimate-architecture)
- [gh-pages branch →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/tree/gh-pages)

### ⚙️ How Allure is Configured

#### Configuration (in `cypress.config.js`):

```javascript
import { allureCypress } from 'allure-cypress/reporter';
const os = require('node:os');

export default {
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: 'allure-results',
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
          browser: config.browserName,
          browserVersion: config.browserVersion,
          env: envName,
        },
      });

      return config;
    },
  },
};
```

#### Enabling Allure in Cypress (in `e2e.js`):

```javascript
import 'allure-cypress';
```

### 📈 Making Reports Meaningful with Metadata

Instead of plain test names, each test can include rich metadata like feature name, story, ticket, tags, and severity using the helper utility:

[AllureMetaUtils.js →](https://github.com/pkorolyshyn/cypress-ultimate-architecture/blob/main/cypress/support/utils/AllureMetaUtils.js)

This utility simplifies adding metadata to tests. You just pass an object and call .apply():

```javascript
import AllureMeta from '../support/utils/AllureMetaUtils';

it('calendar should display the current date as selected', () => {
  new AllureMeta({
    feature: 'Calendar',
    story: 'Default selected date should be today',
    ticket: 'CAL-101',
    tags: ['calendar', 'ui', 'smoke'],
    severity: 'critical',
  }).apply();

  // Test steps...
});
```

### 🖥️ Generating Report Locally

After running Cypress tests locally, you can manually generate the Allure report with:

```bash
npx allure generate --single-file --clean -o allure-report allure-results
```

This command will create a single HTML file inside the `allure-report` directory.

> ⚠️ **Note:** You need to have **Java version 8 or above** installed on your system to generate the report.

#### 📚 Allure Installation Guide for Windows:

- [Allure CLI Installation (Official Docs)](https://allurereport.org/docs/install-for-windows/)
- For Windows-specific setup, ensure Java is installed and added to the PATH, then install Allure via:

  ```bash
  scoop install allure
  ```

## 📁 Adding a New Environment

This framework supports running tests across multiple environments (e.g. dev, staging, production) using dynamic configuration files.

---

### How to Add a New Environment

1. **Create a new environment config file** in the project root.

   **Example:** `cypress.myEnv.js`

2. **Populate it with environment-specific values:**

```js
// cypress.myEnv.js
require('dotenv').config();

module.exports = {
  baseUrl: 'https://your-environment-url.com',
  env: {
    email: 'your@email.com',
    password: process.env.MY_ENV_PASSWORD, // pulled from .env or GitHub Secret
    envName: 'myEnv',
    // Add any other custom environment variables here
  },
};
```

3. **Store sensitive credentials** like passwords in the `.env` file locally (do not commit them), use GitHub Secrets CI:

```bash
# .env
MY_ENV_PASSWORD=yourStrongPasswordHere!
```

4. **Access these values** anywhere in your test project using `Cypress.env()`:

```js
cy.get('input[type="email"]').type(Cypress.env('email'));
```

---

### ▶️ Run Tests on the New Environment

To execute tests using your new config:

```bash
npx cypress open --env envName=myEnv
```

Or run headlessly in CI:

```bash
npx cypress run --env envName=myEnv
```

The system will automatically load the correct `baseUrl` and `env` values from your `cypress.myEnv.js` file.

## 🔍 Running Tests with Cypress Grep

This project uses [`@cypress/grep`](https://www.npmjs.com/package/@cypress/grep) plugin to filter and run only the tests you care about — based on tags defined in your specs.

Each test (or suite) can be tagged using the `tags` object in the test declaration:

```js
describe('Calendar behavior', { tags: '@calendar' }, () => {
  it('should display the current date as selected', { tags: '@smoke' }, () => {
    // ...
  });
});
```

---

### ✅ Running Tagged Tests Locally

Use `--env grepTags=` to specify which tags you want to run.

**Require Both Tags:**

```bash
npx cypress run --env grepTags=@smoke+@calendar
```

Runs only tests that are tagged with both `@smoke` and `@calendar`.

**OR Between Tags:**

```bash
npx cypress run --env grepTags='@smoke @calendar'
```

Runs tests tagged with either `@smoke` or `@calendar`.

> ⚠️ Don’t forget quotes when using OR (space between tags).

**Exclude Tags (Invert):**

```bash
npx cypress run --env grepTags=-@calendar
```

Skips all tests tagged with `@calendar`.

**Include and Exclude Tags:**

```bash
npx cypress run --env grepTags=@smoke+-@calendar
```

Runs all `@smoke` tests excluding those also tagged with `@calendar`.

---

### 🚀 Running Tagged Tests in CI (GitHub Actions)

When triggering Cypress via GitHub Actions:

1. Go to the project’s **Actions** tab.
2. Choose the **Cypress E2E Tests** workflow.
3. Click **"Run workflow"**.
4. In the **"Cypress tags to run"** input field, enter your desired grep tag(s) only.

✅ **Example:**

```text
@smoke+@calendar
```

No need to include `--env` or any other flags — just the grep string itself.

## 🛠️ Additional Features

### 🔕 Optional: Hide XHR Logs in Cypress Command Log

Cypress logs every XHR, fetch, and new URL request in the command log, which can sometimes make it hard to focus on what actually matters during debugging.

💡 To reduce noise, this framework provides an easy toggle to hide XHR and request logs from the Cypress UI.

---

### ✅ How It Works

In `e2e.js`, this block dynamically injects CSS to hide specific log entries:

```js
if (Cypress.config('hideXHRInCommandLog')) {
  const app = window.top;
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
```

🧪 This injection only runs if the config flag is explicitly set.

---

### ⚙️ How to Enable

In your `cypress.config.js`, set the flag:

```js
hideXHRInCommandLog: true;
```

🔁 By default, this option is set to `false` so you'll see everything.

🧼 Set it to `true` if you want cleaner logs — especially useful for visual debugging.

## 📁 Related Projects

- [Testing Env 1 →](https://github.com/pkorolyshyn/testing-env1)
- [Testing Env 2 →](https://github.com/pkorolyshyn/testing-env2)

## 🛠️ External Tools and Plugins

### Framework

- Cypress (https://cypress.io/)

---

### Reporting

- Allure (https://allurereport.org/docs/cypress/)

---

### CI/CD

- GitHub Actions (https://docs.github.com/en/actions)
- GitHUb Pages (https://docs.github.com/en/pages)
- Dockerfile (https://docs.docker.com/reference/dockerfile/)

---

### Test Tags

- Cypress Grep (https://www.npmjs.com/package/@cypress/grep)

---

### Formatting

- ESLint (https://eslint.org/)
- Prettier (https://prettier.io/)
- Husky (https://typicode.github.io/husky/)
- lint-staged (https://www.npmjs.com/package/lint-staged)

## 💛 Contributing
Contributions are welcome! If you’d like to improve this framework, feel free to fork it, create a branch, and open a pull request.

Some ideas you could help with:

* Implement Allure history

* Any advanced documentation

* Add more extensive tests for Dialog, Calendar, Echarts, Smart Table, or Auth

* Add MS Teams chat reporting integration

* Add more data-testid selectors to the E-commerce page: https://github.com/pkorolyshyn/testing-env1
* Or anything you think will be suitable and useful


> **Note:** Please avoid writing `tests` for the E-commerce section — it is meant as a playground for users to try the framework and write their own tests.

If you’re unsure how to start, feel free to open an issue or discussion.

Check the full contribution guidelines here: [CONTRIBUTING.md](.github/CONTRIBUTING.md)