import smartTablePage from '../../pages/SmartTablePage';
import tableData from '../../fixtures/tableData';

const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('the user is on the Smart Table page', () => {
  smartTablePage.visit();
});

Then('the first-name column should be displayed with correct names', () => {
  smartTablePage.firstNamesList.shouldHaveTexts(tableData.firstNames);
});

Then('the table should be displayed with correct headers', () => {
  smartTablePage.tableHeaders.shouldAllBeVisible().shouldHaveTexts(tableData.headers);
});
