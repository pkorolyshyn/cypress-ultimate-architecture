import loginSteps from '../steps/loginSteps';

describe('Login form behavior', { tags: '@login' }, () => {
  beforeEach(() => {
    loginSteps.visitLoginPage();
  });

  it('should allow user to log in with valid credentials', { tags: '@smoke' }, () => {
    loginSteps.login();
    loginSteps.verifyUserIsLoggedIn();
  });

  it('should show validation error when email format is invalid', () => {
    loginSteps.enterInvalidEmail();
    loginSteps.verifyInvalidEmailError();
  });
});
