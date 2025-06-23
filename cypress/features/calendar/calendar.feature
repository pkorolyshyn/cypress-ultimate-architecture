# Tags like @CAL-101 or @CAL-102 are used to connect this scenario with its metadata
# defined in `support/allureMeta.hooks.js`. That’s where we assign Allure labels like feature,
# story, severity, and ticket info. The tag here triggers the matching `Before` hook.
#
# You can add more tags (like @smoke or @calendar) for filtering tests with Cypress grep,
# but only tags used in hooks will map to Allure metadata.

Feature: Calendar Page

  @CAL-101 @calendar @smoke
  Scenario: Verify current date is displayed as selected by default
    Given the user is on the Calendar page
    Then the selected date should be today

  @CAL-102 @calendar
  Scenario: Verify highlighted cell has correct background color
    Given the user is on the Calendar page
    Then today's cell should be highlighted
