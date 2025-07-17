// Header component represents the global application header.
//
// ✅ Example of usage:
//
//   // Inside ECommercePage.js
//   import Header from '../components/Header';
//
//   class ECommercePage extends BasePage {
//     get header() {
//       return new Header();
//     }
//   }

import BaseComponent from '../core/BaseComponent';

export default class Header extends BaseComponent {
  selectors = {
    logo: "[data-testid='header-logo']",
    userPicture: '.user-picture',
  };

  get logo() {
    return this.select(this.selectors.logo);
  }

  get userPicture() {
    return this.select(this.selectors.userPicture);
  }
}
