// Header component represents the global application header.
//
// ✅ Example of usage:
//
//   // Inside ECommercePage.ts
//   import Header from '../components/Header';
//
//   class ECommercePage extends BasePage {
//     public get header() {
//       return new Header();
//     }
//   }

import BaseComponent from '../core/BaseComponent';

export default class Header extends BaseComponent {
  private readonly selectors = {
    logo: "[data-testid='header-logo']",
    userPicture: '.user-picture',
  } as const;

  public get logo() {
    return this.select(this.selectors.logo);
  }

  public get userPicture() {
    return this.select(this.selectors.userPicture);
  }
}
