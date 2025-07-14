// ✅ InputElement is a wrapper for input-specific logic (like typing and placeholder checks).
// It extends SingleElement and follows the idea of the Interface Segregation Principle from SOLID,
// by isolating behavior specific to form fields without bloating the base element wrapper.

import SingleElement from './SingleElement';

export default class InputElement extends SingleElement {
  type(value: string, isLog = false): this {
    this.element.type(value, { log: isLog });

    return this;
  }

  shouldHavePlaceholder(placeholderValue: string): this {
    this.element.should('have.attr', 'placeholder', placeholderValue);

    return this;
  }
}
