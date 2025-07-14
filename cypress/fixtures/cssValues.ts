// ✅ cssValues is a centralized reference for all CSS styles used in test assertions.
//
// Why this exists:
// - Cypress tests often validate styles like colors, gradients, and backgrounds.
// - Hardcoding raw CSS values (e.g., 'rgb(255, 61, 113)') across tests leads to duplication and confusion.
// - This object improves maintainability, consistency, and readability across your test suite.
//
// How to use it:
// - Import specific values when writing assertions like `loginPage.invalidEmailError.shouldHaveCss('color', cssValues.alerts.errorText);`.
// - Each value is grouped by component usage (e.g., buttons, alerts, calendar).
// - Shared values (like `danger` or `success`) are defined in the `palette` and reused by components.
//
// This makes visual testing scalable, especially when design tokens change across environments or themes.

type CSSValues = {
  palette: {
    danger: string;
    success: string;
    primary: string;
    primaryGradient: string;
  };
  buttons: {
    cancelBg: string;
    submitBg: string;
  };
  alerts: {
    errorText: string;
  };
  calendar: {
    cellBg: string;
  };
};

const cssValues: CSSValues = {
  palette: {
    danger: 'rgb(255, 61, 113)',
    success: 'rgb(0, 214, 143)',
    primary: 'rgb(51, 102, 255)',
    primaryGradient: 'linear-gradient(to right, rgb(51, 102, 255), rgb(39, 75, 219))',
  },
  buttons: {
    cancelBg: '',
    submitBg: '',
  },
  alerts: {
    errorText: '',
  },
  calendar: {
    cellBg: '',
  },
};

// We assign shared palette values to specific component styles to make usage explicit.
// This avoids repeating raw color values, while still allowing for future overrides.
// Alternatively, we could define a generic variables, but separating usage adds clarity.
cssValues.buttons.cancelBg = cssValues.palette.danger;
cssValues.buttons.submitBg = cssValues.palette.success;
cssValues.alerts.errorText = cssValues.palette.danger;
cssValues.calendar.cellBg = cssValues.palette.primary;

export default cssValues;
