// AlertDialog component represents a reusable dialog UI element.
// It is meant to be composed inside a Page Object (e.g., DialogPage.js).
// This follows the principle of composition: page objects are composed of components.
//
// ✅ Example of usage inside a page object:
//
//   // Inside DialogPage.js
//   import AlertDialog from '../components/AlertDialog';
//
//   class DialogPage {
//     get alertDialog() {
//       return new AlertDialog();
//     }
//   }
//
// This allows DialogPage to expose alertDialog as a nested, reusable component.

import BaseComponent from '../core/BaseComponent';

export default class AlertDialog extends BaseComponent {
  // Define all element selectors used within this dialog component
  selectors = {
    title: "[data-testid='alert-title']",
    description: "[data-testid='alert-description']",
    dismissDialogBtn: "[data-testid='alert-dismiss-btn']",
  };

  get title() {
    return this.select(this.selectors.title);
  }

  get description() {
    return this.select(this.selectors.description);
  }

  get dismissDialogBtn() {
    return this.select(this.selectors.dismissDialogBtn);
  }
}
