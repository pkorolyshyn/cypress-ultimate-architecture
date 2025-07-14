// ✅ Cypress environment config for `env1`
// This file defines the baseUrl and environment-specific values used during local or CI test runs.
//
// The password is loaded securely from `.env` localy or from GitHub secrets on CI using `dotenv`.
// You can switch between environments by running Cypress with:
//
//   npx cypress run --env envName=env1
//
// Similar configs exist for other environments (e.g., `cypress.env2.ts`).

import { EnvConfig } from './cypress/support/types';
import dotenv from 'dotenv';
dotenv.config();

const settings: EnvConfig = {
  baseUrl: 'https://pkorolyshyn.github.io/testing-env1/#',
  env: {
    email: 'env1_test@email.com',
    password: process.env.ENV1_PASSWORD!,
    envName: 'env1',
  },
};

export default settings;
