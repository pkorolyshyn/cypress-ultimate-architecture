import BasePage from '../core/BasePage';

class LoginPage extends BasePage {
  protected url = '/auth/login';

  private readonly selectors = {
    layout: 'nb-auth-block',
    emailInput: '#input-email',
    passwordInput: '#input-password',
    loginBtn: 'nb-login button',
    invalidEmailError: 'p.status-danger',
  } as const;

  public get layout() {
    return this.select(this.selectors.layout);
  }

  public get emailInput() {
    return this.selectInput(this.selectors.emailInput);
  }

  public get passwordInput() {
    return this.selectInput(this.selectors.passwordInput);
  }

  public get loginBtn() {
    return this.select(this.selectors.loginBtn);
  }

  public get invalidEmailError() {
    return this.select(this.selectors.invalidEmailError);
  }
}

const loginPage = new LoginPage();
export default loginPage;
