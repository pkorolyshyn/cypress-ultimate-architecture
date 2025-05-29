// ✅ calendarSteps defines actions and verifications related to the Calendar page.
//
// Why this exists:
// - Steps group multiple low-level interactions into meaningful business-level actions.
// - This keeps tests readable and focused on behavior rather than technical detail.
// - It also helps reduce duplication when the same logic is used across multiple test files.
//
// These steps wrap assertions for the Calendar page and use values from shared utility modules
// like DateUtils for dynamic date formatting and cssValues for centralized visual checks.
//
// This structure follows the Page Object + Steps pattern for scalable test automation.

import calendarPage from '../pages/CalendarPage';
import dateUtils from '../support/utils/DateUtils';
import cssValues from '../fixtures/cssValues';

const calendarSteps = {
  visitCalendarPage() {
    cy.visit(calendarPage.url);
  },

  verifyCurrentDateIsSelected() {
    calendarPage.selectedDate
      .shouldBeVisible()
      .shouldContainText(`Selected date: ${dateUtils.getCurrentDate()}`);
  },

  verifyTodayCellIsHighlighted() {
    calendarPage.todayCell
      .shouldBeVisible()
      .shouldHaveCss('background-color', cssValues.calendar.cellBg);
  },
};

export default calendarSteps;
