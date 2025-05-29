// BasePage defines shared logic for all page objects in the test framework.
// Treat this as an abstract base class.
//
// ✅ Example of usage:
//   import BasePage from '../core/BasePage';
//
//   class LoginPage extends BasePage {
//     url = '/auth/login';
//     ...
//   }
//
// Then in test:
//   loginPage.visit();

import BaseObject from './BaseObject';

export default class BasePage extends BaseObject {
  constructor() {
    super();
    if (this.constructor === BasePage) {
      throw new Error('BasePage is abstract. Extend it to use.');
    }
  }

  visit() {
    if (!this.url) throw new Error('Page URL is not defined.');

    cy.visit(this.url);
    return this;
  }
}
