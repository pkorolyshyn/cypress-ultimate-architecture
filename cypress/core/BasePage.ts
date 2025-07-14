// BasePage defines shared logic for all page objects in the test framework.
// Treat this as an abstract base class.
//
// ✅ Example of usage:
//   import BasePage from '../core/BasePage';
//
//   class LoginPage extends BasePage {
//     protected url = '/auth/login';
//     ...
//   }
//
// Then in test:
//   loginPage.visit();

import BaseObject from './BaseObject';

export default abstract class BasePage extends BaseObject {
  protected abstract url: string;

  visit(): this {
    if (!this.url) throw new Error('Page URL is not defined.');

    cy.visit(this.url);
    return this;
  }
}
