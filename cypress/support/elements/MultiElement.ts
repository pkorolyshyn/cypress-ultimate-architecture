// ✅ MultiElement is a wrapper for working with multiple DOM elements (e.g., lists, tables, or repeated items).
// It allows you to perform bulk checks like verifying all elements are visible or match expected text values.

export default class MultiElement {
  private readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  public get elements(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selector);
  }

  shouldAllBeVisible(): this {
    this.elements.each($el => {
      cy.wrap($el).should('be.visible');
    });

    return this;
  }

  /**
   * Verifies that each element in the list has the expected text, in order.
   *
   * Example:
   *   smartTablePage.firstNamesList.shouldHaveTexts([
   *     'Mark',
   *     'Larry',
   *   ]);
   *
   * This will check:
   *   - First element equals to 'Mark'
   *   - Second element equals to 'Larry'
   *
   * @param {string[]} expectedTexts - An array of expected text values to match against each element.
   * @returns {MultiElement}
   */
  public shouldHaveTexts(expectedTexts: readonly string[]): this {
    this.elements.each(($el, index) => {
      expect($el.text().trim()).to.eq(expectedTexts[index]);
    });

    return this;
  }
}
