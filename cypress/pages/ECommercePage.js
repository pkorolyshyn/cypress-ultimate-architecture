// ✅ ECommercePage is a simple (or not) example page object used for testing and experimentation.
//
// The page: https://pkorolyshyn.github.io/testing-env1/#/pages/dashboard
//
// It's intended as your template and playgorund for writing new tests.
//
// Generic top-level selectors have been added to the page structure in the app
// to make it easier for you to locate and interact with key UI elements during testing.
//
// Feel free to experiment, add your own logic, and test selectors here 😊

import BasePage from '../core/BasePage';
import Header from '../components/Header';

class ECommercePage extends BasePage {
  url = '/pages/dashboard';

  get header() {
    return new Header();
  }
}

const eCommercePage = new ECommercePage();
export default eCommercePage;
