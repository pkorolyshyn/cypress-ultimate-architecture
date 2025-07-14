// EnterNameDialog component represents a reusable dialog UI element.
// It is meant to be composed inside a Page Object (e.g., DialogPage.ts).
// This follows the principle of composition: page objects are composed of components.
//
// ✅ Example of usage:
//
//   // Inside DialogPage.ts
//   import EnterNameDialog from '../components/EnterNameDialog';
//
//   class DialogPage {
//     public get enterNameDialog() {
//       return new EnterNameDialog();
//     }
//   }

import BaseComponent from '../core/BaseComponent';

export default class EnterNameDialog extends BaseComponent {
  private readonly selectors = {
    title: "[data-testid='enter-name-title']",
    enterNameInput: "[data-testid='enter-name-input']",
    cancelBtn: "[data-testid='enter-name-cancel-btn']",
    submitBtn: "[data-testid='enter-name-submit-btn']",
  } as const;

  public get title() {
    return this.select(this.selectors.title);
  }

  public get enterNameInput() {
    return this.selectInput(this.selectors.enterNameInput);
  }

  public get cancelBtn() {
    return this.select(this.selectors.cancelBtn);
  }

  public get submitBtn() {
    return this.select(this.selectors.submitBtn);
  }
}
