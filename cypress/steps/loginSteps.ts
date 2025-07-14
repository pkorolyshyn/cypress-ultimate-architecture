import loginPage from '../pages/LoginPage';
import eCommercePage from '../pages/ECommercePage';
import cssValues from '../fixtures/cssValues';
import userData from '../fixtures/userData';

const loginSteps = {
  visitLoginPage() {
    loginPage.visit();
  },

  login(email = Cypress.env('email'), password = Cypress.env('password')) {
    loginPage.emailInput.shouldBeVisible().type(email);
    loginPage.passwordInput.shouldBeVisible().type(password);
    loginPage.loginBtn.shouldBeVisible().click();
  },

  enterInvalidEmail(email = userData.invalidEmail) {
    loginPage.emailInput.shouldBeVisible().type(email);
    loginPage.layout.click(true); // triggers validation
  },

  verifyInvalidEmailError() {
    loginPage.invalidEmailError
      .shouldBeVisible()
      .shouldHaveCss('color', cssValues.alerts.errorText);
  },

  verifyUserIsLoggedIn() {
    eCommercePage.header.logo.shouldBeVisible().shouldContainText('ngx-admin');

    eCommercePage.header.userPicture.shouldBeVisible();
  },
};

export default loginSteps;
