// AlertDialog component represents a reusable dialog UI element.
// It is meant to be composed inside a Page Object (e.g., DialogPage.ts).
// This follows the principle of composition: page objects are composed of components.
//
// ✅ Example of usage inside a page object:
//
//   // Inside DialogPage.ts
//   import AlertDialog from '../components/AlertDialog';
//
//   class DialogPage {
//     public get alertDialog() {
//       return new AlertDialog();
//     }
//   }
//
// This allows DialogPage to expose alertDialog as a nested, reusable component.

import BaseComponent from '../core/BaseComponent';

export default class AlertDialog extends BaseComponent {
  // Define all element selectors used within this dialog component
  private readonly selectors = {
    title: "[data-testid='alert-title']",
    description: "[data-testid='alert-description']",
    dismissDialogBtn: "[data-testid='alert-dismiss-btn']",
  } as const;

  public get title() {
    return this.select(this.selectors.title);
  }

  public get description() {
    return this.select(this.selectors.description);
  }

  public get dismissDialogBtn() {
    return this.select(this.selectors.dismissDialogBtn);
  }
}
