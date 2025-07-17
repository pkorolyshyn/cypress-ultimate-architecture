// ✅ SingleElement is a wrapper around Cypress's cy.get() that makes working with single DOM elements easier and more consistent.
//
// Why this exists:
// - In real projects, we often repeat the same logic when interacting with elements — checking visibility, clicking, verifying text, etc.
// - Instead of duplicating those `.should(...)` and `.click()` calls in every test or step, we wrap them here once.
// - This also gives you one place to handle custom logic that applies across the whole framework.
//
// 🔁 Example benefit: trimming text before verification
// If your app sometimes renders text with extra spaces, you can add `.invoke('text').then(text => text.trim())` here
// so every `shouldContainText()` call automatically trims — no need to repeat it in tests.
//
// 📊 Another example: number formatting
// If you're asserting prices or values that need to be localized using `.toLocaleString()`, you can handle that here,
// and use the formatted value in all your verifications consistently.
//
// This pattern keeps your test code clean and centralized, and makes it easy to update behavior in one place.
//
// And many other ways this can help you 😊

export default class SingleElement {
  constructor(selector) {
    this.selector = selector;
  }

  get element() {
    return cy.get(this.selector);
  }

  shouldBeVisible() {
    this.element.should('be.visible');

    return this;
  }

  shouldNotExist() {
    this.element.should('not.exist');

    return this;
  }

  shouldContainText(text) {
    this.element.should('contain.text', text);

    return this;
  }

  click(isForce = false) {
    this.element.click({ force: isForce });

    return this;
  }

  shouldHaveCss(cssProperty, cssValue) {
    this.element.should('have.css', cssProperty, cssValue);

    return this;
  }

  /**
   * Simulates a hover action using realMouseMove at specified coordinates.
   *
   * This is more reliable than Cypress's native `.trigger('mouseover')`
   * and supports interactions with complex elements like canvas charts.
   *
   * Uses `@cypress-real-events` to simulate a real user mouse movement.
   *
   * @param {number} x - Horizontal offset from the center of the element (default is 0).
   * @param {number} y - Vertical offset from the center of the element (default is 0).
   *
   * @example
   *   chart.pieCanvas.hoverByCoords(-20, 10); // hovers at a point inside the canvas
   */
  hoverByCoords(x = 0, y = 0) {
    this.element.realMouseMove(x, y, { position: 'center' });

    return this;
  }
}
