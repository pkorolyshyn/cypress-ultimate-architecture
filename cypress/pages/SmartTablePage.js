import BasePage from '../core/BasePage';

class SmartTablePage extends BasePage {
  url = '/pages/tables/smart-table';

  selectors = {
    tableHeaders: 'div.ng2-smart-title',
    firstNamesList: "[data-testid='first-name-cell']",
  };

  get tableHeaders() {
    return this.selectAll(this.selectors.tableHeaders);
  }

  get firstNamesList() {
    return this.selectAll(this.selectors.firstNamesList);
  }
}

const smartTablePage = new SmartTablePage();
export default smartTablePage;
