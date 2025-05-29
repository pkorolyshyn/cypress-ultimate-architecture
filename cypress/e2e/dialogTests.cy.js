import dialogSteps from '../steps/dialogSteps';

describe('Alert dialog behavior', { tags: '@dialog' }, () => {
  beforeEach(() => {
    dialogSteps.visitDialogPage();
  });

  it('should open when user clicks the alert button', () => {
    dialogSteps.openAlertDialog();
    dialogSteps.verifyAlertDialogOpened();
  });

  it('should close when the user clicks the dismiss button', () => {
    dialogSteps.openAlertDialog();
    dialogSteps.dismissAlertDialog();
    dialogSteps.verifyAlertDialogClosed();
  });
});

describe('Enter name dialog behavior', () => {
  beforeEach(() => {
    dialogSteps.visitDialogPage();
  });

  it('should display the dialog with input element, submit and cancel buttons', () => {
    dialogSteps.openEnterNameDialog();
    dialogSteps.verifyEnterNameDialogOpened();
  });

  it('should allow the user to submit a name and show it on the page', { tags: '@smoke' }, () => {
    dialogSteps.openEnterNameDialog();
    dialogSteps.submitName();
    dialogSteps.verifyNameSubmitted();
  });
});
