// ✅ This E2E test suite demonstrates how to integrate Allure reporting in a Cypress framework.
// It serves as an example of how metadata can be added to each test to improve report clarity.
//
// AllureMeta is used to:
//   - Define the feature and story related to the test
//   - Link tests to Jira or ticket IDs
//   - Assign custom tags (for filtering in reports)
//   - Set severity levels (e.g. critical, minor)
//
// The goal of this suite is both to validate calendar behavior
// and to showcase best practices for using Allure in a real-world test architecture.

import calendarSteps from '../steps/calendarSteps';
import AllureMeta from '../support/utils/AllureMetaUtils';

// This test suite uses tags to categorize and filter tests:
// - `@calendar` tag on the describe block groups all calendar-related tests
// - `@smoke` tag on individual tests marks them as part of the smoke test suite
// Tags are be used in Cypress grep plugin to run or skip only tag specific cases.

describe('Calendar behavior', { tags: '@calendar' }, () => {
  beforeEach(() => {
    calendarSteps.visitCalendarPage();
  });

  it('should display the current date as selected', { tags: '@smoke' }, () => {
    new AllureMeta({
      feature: 'Calendar',
      story: 'Default selected date should be today',
      ticket: 'CAL-101',
      tags: ['calendar', 'ui', 'smoke'],
      severity: 'critical',
    }).apply();

    calendarSteps.verifyCurrentDateIsSelected();
  });

  it("should highlight today's cell with correct background color", () => {
    new AllureMeta({
      feature: 'Calendar',
      story: 'Today cell is visually highlighted',
      ticket: 'CAL-102',
      tags: ['calendar', 'ui'],
      severity: 'minor',
    }).apply();

    calendarSteps.verifyTodayCellIsHighlighted();
  });
});
