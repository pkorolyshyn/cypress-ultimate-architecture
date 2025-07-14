import BasePage from '../core/BasePage';
import AlertDialog from '../components/AlertDialog';
import EnterNameDialog from '../components/EnterNameDialog';

class DialogPage extends BasePage {
  protected url = '/pages/modal-overlays/dialog';

  private readonly selectors = {
    openAlertDialogBtn: "[data-testid='standard-dialog-btn']",
    openEnterNameDialogBtn: "[data-testid='enter-name-dialog-btn']",
    addedName: "[data-testid='names']",
  };

  public get openAlertDialogBtn() {
    return this.select(this.selectors.openAlertDialogBtn);
  }

  public get openEnterNameDialogBtn() {
    return this.select(this.selectors.openEnterNameDialogBtn);
  }

  public get addedName() {
    return this.select(this.selectors.addedName);
  }

  // ✅ These are composed components used within the page.
  // Instead of duplicating dialog logic here, we import reusable components (AlertDialog, EnterNameDialog)
  // and expose them through getters. This follows the composition pattern and keeps the page clean.

  public get alertDialog() {
    return new AlertDialog();
  }

  public get enterNameDialog() {
    return new EnterNameDialog();
  }
}

const dialogPage = new DialogPage();
export default dialogPage;
