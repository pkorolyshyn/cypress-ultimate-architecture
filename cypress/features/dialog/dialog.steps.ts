import dialogPage from '../../pages/DialogPage';
import cssValues from '../../fixtures/cssValues';
import userData from '../../fixtures/userData';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('the user is on the Dialog page', () => {
  dialogPage.visit();
});

When('the user opens the alert dialog', () => {
  dialogPage.openAlertDialogBtn.click();
});

Then('the alert dialog should show title and description', () => {
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
});

Given('the alert dialog is open', () => {
  dialogPage.openAlertDialogBtn.click();
});

When('the user dismisses the alert dialog', () => {
  dialogPage.alertDialog.dismissDialogBtn.click();
});

Then('the alert dialog should be closed', () => {
  dialogPage.alertDialog.title.shouldNotExist();
});

When('the user opens the enter-name dialog', () => {
  dialogPage.openEnterNameDialogBtn.click();
});

Then('the dialog should contain the input, submit and cancel buttons with correct styles', () => {
  dialogPage.enterNameDialog.title.shouldBeVisible().shouldContainText('Enter your name');

  dialogPage.enterNameDialog.enterNameInput.shouldBeVisible().shouldHavePlaceholder('Name');

  dialogPage.enterNameDialog.cancelBtn
    .shouldBeVisible()
    .shouldHaveCss('background-color', cssValues.buttons.cancelBg);

  dialogPage.enterNameDialog.submitBtn
    .shouldBeVisible()
    .shouldHaveCss('background-color', cssValues.buttons.submitBg);
});

Then('the user types a valid name', () => {
  dialogPage.enterNameDialog.enterNameInput.type(userData.name);
});

Then('the user submits the name', () => {
  dialogPage.enterNameDialog.submitBtn.click();
});

Then('the submitted name should be displayed on the page', () => {
  dialogPage.addedName.shouldBeVisible().shouldContainText(userData.name);
});
