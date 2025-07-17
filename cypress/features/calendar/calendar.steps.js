// Example of step definitions for the Calendar feature.
//
// Each Given / When / Then here maps 1-to-1 to sentences in
// `calendar.feature`, keeping the Gherkin readable and the code reusable.

import calendarPage from '../../pages/CalendarPage';
import dateUtils from '../../support/utils/DateUtils';
import cssValues from '../../fixtures/cssValues';

const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('the user is on the Calendar page', () => {
  calendarPage.visit();
});

Then('the selected date should be today', () => {
  calendarPage.selectedDate
    .shouldBeVisible()
    .shouldContainText(`Selected date: ${dateUtils.getCurrentDate()}`);
});

Then("today's cell should be highlighted", () => {
  calendarPage.todayCell
    .shouldBeVisible()
    .shouldHaveCss('background-color', cssValues.calendar.cellBg);
});
