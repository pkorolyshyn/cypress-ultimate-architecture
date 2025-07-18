import smartTablePage from '../pages/SmartTablePage';
import tableData from '../fixtures/tableData';

const smartTableSteps = {
  visitSmartTablePage() {
    smartTablePage.visit();
  },

  verifyTableFirstNames() {
    smartTablePage.firstNamesList.shouldHaveTexts(tableData.firstNames);
  },

  verifyTableHeaders() {
    smartTablePage.tableHeaders.shouldAllBeVisible().shouldHaveTexts(tableData.headers);
  },
};

export default smartTableSteps;
