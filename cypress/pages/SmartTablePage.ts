import BasePage from '../core/BasePage';

class SmartTablePage extends BasePage {
  protected url = '/pages/tables/smart-table';

  private readonly selectors = {
    tableHeaders: 'div.ng2-smart-title',
    firstNamesList: "[data-testid='first-name-cell']",
  };

  public get tableHeaders() {
    return this.selectAll(this.selectors.tableHeaders);
  }

  public get firstNamesList() {
    return this.selectAll(this.selectors.firstNamesList);
  }
}

const smartTablePage = new SmartTablePage();
export default smartTablePage;
