import BasePage from '../core/BasePage';
import AlertDialog from '../components/AlertDialog';
import EnterNameDialog from '../components/EnterNameDialog';

class DialogPage extends BasePage {
  url = '/pages/modal-overlays/dialog';

  selectors = {
    openAlertDialogBtn: "[data-testid='standard-dialog-btn']",
    openEnterNameDialogBtn: "[data-testid='enter-name-dialog-btn']",
    addedName: "[data-testid='names']",
  };

  get openAlertDialogBtn() {
    return this.select(this.selectors.openAlertDialogBtn);
  }

  get openEnterNameDialogBtn() {
    return this.select(this.selectors.openEnterNameDialogBtn);
  }

  get addedName() {
    return this.select(this.selectors.addedName);
  }

  // ✅ These are composed components used within the page.
  // Instead of duplicating dialog logic here, we import reusable components (AlertDialog, EnterNameDialog)
  // and expose them through getters. This follows the composition pattern and keeps the page clean.

  get alertDialog() {
    return new AlertDialog();
  }

  get enterNameDialog() {
    return new EnterNameDialog();
  }
}

const dialogPage = new DialogPage();
export default dialogPage;
