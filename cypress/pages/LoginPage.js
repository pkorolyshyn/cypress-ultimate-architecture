import BasePage from '../core/BasePage';

class LoginPage extends BasePage {
  url = '/auth/login';

  selectors = {
    layout: 'nb-auth-block',
    emailInput: '#input-email',
    passwordInput: '#input-password',
    loginBtn: 'nb-login button',
    invalidEmailError: 'p.status-danger',
  };

  get layout() {
    return this.select(this.selectors.layout);
  }

  get emailInput() {
    return this.selectInput(this.selectors.emailInput);
  }

  get passwordInput() {
    return this.selectInput(this.selectors.passwordInput);
  }

  get loginBtn() {
    return this.select(this.selectors.loginBtn);
  }

  get invalidEmailError() {
    return this.select(this.selectors.invalidEmailError);
  }
}

const loginPage = new LoginPage();
export default loginPage;
