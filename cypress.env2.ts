// ✅ Example config for running Cypress on a second environment (env2)
// Used to demonstrate how you can switch between multiple environments.
//
//   npx cypress run --env envName=env2

import { EnvConfig } from './cypress/support/types';
import dotenv from 'dotenv';
dotenv.config();

const settings: EnvConfig = {
  baseUrl: 'https://pkorolyshyn.github.io/testing-env2/#',
  env: {
    email: 'env2_test@email.com',
    password: process.env.ENV2_PASSWORD!,
    envName: 'env2',
  },
};

export default settings;
