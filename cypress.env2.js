// ✅ Example config for running Cypress on a second environment (env2)
// Used to demonstrate how you can switch between multiple environments.
//
//   npx cypress run --env envName=env2

require('dotenv').config();

module.exports = {
  baseUrl: 'https://pkorolyshyn.github.io/testing-env2/#',
  env: {
    email: 'env2_test@email.com',
    password: process.env.ENV2_PASSWORD,
    envName: 'env2',
  },
};
