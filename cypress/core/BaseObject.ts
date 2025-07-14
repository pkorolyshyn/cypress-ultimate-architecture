// BaseObject is the foundation for all pages and components.
// It provides universal utility methods for selecting elements in a clean and consistent way.
//
// ✅ These methods return custom wrapper classes (SingleElement, InputElement, MultiElement),
//    which enhance Cypress commands with reusable assertions and actions.
//
// Methods:
// - select(selector): Returns a SingleElement wrapper (for a single DOM node)
// - selectInput(selector): Returns an InputElement wrapper (adds input-specific behavior)
// - selectAll(selector): Returns a MultiElement wrapper (for working with lists or multiple elements)
//
// This base class helps keep your PageObjects and Components clean and DRY.

import SingleElement from '../support/elements/SingleElement';
import InputElement from '../support/elements/InputElement';
import MultiElement from '../support/elements/MultiElement';

export default class BaseObject {
  protected select(selector: string): SingleElement {
    return new SingleElement(selector);
  }

  protected selectInput(selector: string): InputElement {
    return new InputElement(selector);
  }

  protected selectAll(selector: string): MultiElement {
    return new MultiElement(selector);
  }
}
