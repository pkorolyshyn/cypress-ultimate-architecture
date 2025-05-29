// BaseComponent serves as the base class for all reusable UI components (e.g., dialogs, headers, widgets).
// It extends BaseObject, which provides shared helper methods like `select()` or `selectInput()`.
// You can add common logic here that applies to all components.
// This helps keep your component classes clean and consistent.

import BaseObject from './BaseObject';

export default class BaseComponent extends BaseObject {}
