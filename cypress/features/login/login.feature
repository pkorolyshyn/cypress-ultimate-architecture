Feature: Login form

  @login @smoke
  Scenario: Verify successful login
    Given the user is on the Login page
    When the user logs in with valid credentials
    Then the main page should be visible

  Scenario: Verify invalid email validation
    Given the user is on the Login page
    When the user enters an invalid email
    Then an invalid-email error message should appear
