import smartTablePage from '../../pages/SmartTablePage.js';
import tableData from '../../fixtures/tableData.js';

const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('the user is on the Smart Table page', () => {
  cy.visit(smartTablePage.url);
});

Then('the first-name column should be displayed with correct names', () => {
  smartTablePage.firstNamesList.shouldHaveTexts(tableData.firstNames);
});

Then('the table should be displayed with correct headers', () => {
  smartTablePage.tableHeaders.shouldAllBeVisible().shouldHaveTexts(tableData.headers);
});
