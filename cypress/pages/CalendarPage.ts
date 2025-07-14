// ✅ CalendarPage is a Page Object that represents the Calendar screen in the application.
//
// Why this exists:
// - Page Objects encapsulate all selectors and actions related to a specific page.
// - This improves test readability, reusability, and maintainability.
//
// How it works:
// - All selectors are grouped under a single `selectors` object for clarity.
// - Getters return custom element wrappers using helper methods from BasePage.
//
// Example usage in a test:
//   calendarPage.visit();
//   calendarPage.todayCell.shouldBeVisible();

import BasePage from '../core/BasePage';

class CalendarPage extends BasePage {
  protected url = '/pages/extra-components/calendar';

  private readonly selectors = {
    selectedDate: "[data-testid='selected-date']",
    todayCell: '.today',
  } as const;

  public get selectedDate() {
    return this.select(this.selectors.selectedDate);
  }

  public get todayCell() {
    return this.select(this.selectors.todayCell);
  }
}

const calendarPage = new CalendarPage();
export default calendarPage;
