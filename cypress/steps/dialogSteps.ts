import dialogPage from '../pages/DialogPage';
import cssValues from '../fixtures/cssValues';
import userData from '../fixtures/userData';

const dialogSteps = {
  visitDialogPage() {
    dialogPage.visit();
  },

  openAlertDialog() {
    dialogPage.openAlertDialogBtn.click();
  },

  verifyAlertDialogOpened() {
    dialogPage.alertDialog.title
      .shouldBeVisible()
      .shouldContainText('This is a title passed to the dialog component');

    dialogPage.alertDialog.description
      .shouldBeVisible()
      .shouldContainText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

    dialogPage.alertDialog.dismissDialogBtn
      .shouldBeVisible()
      .shouldContainText('Dismiss Dialog')
      .shouldHaveCss('background-image', cssValues.palette.primaryGradient);
  },

  dismissAlertDialog() {
    dialogPage.alertDialog.dismissDialogBtn.click();
  },

  verifyAlertDialogClosed() {
    dialogPage.alertDialog.title.shouldNotExist();
  },

  openEnterNameDialog() {
    dialogPage.openEnterNameDialogBtn.click();
  },

  verifyEnterNameDialogOpened() {
    dialogPage.enterNameDialog.title.shouldBeVisible().shouldContainText('Enter your name');

    dialogPage.enterNameDialog.enterNameInput.shouldBeVisible().shouldHavePlaceholder('Name');

    dialogPage.enterNameDialog.cancelBtn
      .shouldBeVisible()
      .shouldHaveCss('background-color', cssValues.buttons.cancelBg);

    dialogPage.enterNameDialog.submitBtn
      .shouldBeVisible()
      .shouldHaveCss('background-color', cssValues.buttons.submitBg);
  },

  submitName(name: string = userData.name) {
    dialogPage.enterNameDialog.enterNameInput.shouldBeVisible().type(name);

    dialogPage.enterNameDialog.submitBtn.shouldBeVisible().click();
  },

  verifyNameSubmitted(name: string = userData.name) {
    dialogPage.enterNameDialog.title.shouldNotExist();
    dialogPage.addedName.shouldBeVisible().shouldContainText(name);
  },
};

export default dialogSteps;
