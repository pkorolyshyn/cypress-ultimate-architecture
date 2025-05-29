// EnterNameDialog component represents a reusable dialog UI element.
// It is meant to be composed inside a Page Object (e.g., DialogPage.js).
// This follows the principle of composition: page objects are composed of components.
//
// ✅ Example of usage:
//
//   // Inside DialogPage.js
//   import EnterNameDialog from '../components/EnterNameDialog';
//
//   class DialogPage {
//     get enterNameDialog() {
//       return new EnterNameDialog();
//     }
//   }

import BaseComponent from '../core/BaseComponent';

export default class EnterNameDialog extends BaseComponent {
  selectors = {
    title: "[data-testid='enter-name-title']",
    enterNameInput: "[data-testid='enter-name-input']",
    cancelBtn: "[data-testid='enter-name-cancel-btn']",
    submitBtn: "[data-testid='enter-name-submit-btn']",
  };

  get title() {
    return this.select(this.selectors.title);
  }

  get enterNameInput() {
    return this.selectInput(this.selectors.enterNameInput);
  }

  get cancelBtn() {
    return this.select(this.selectors.cancelBtn);
  }

  get submitBtn() {
    return this.select(this.selectors.submitBtn);
  }
}
