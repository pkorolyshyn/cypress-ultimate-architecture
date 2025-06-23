Feature: Dialog boxes

  @dialog
  Scenario: Verify alert dialog can be opened
    Given the user is on the Dialog page
    When the user opens the alert dialog
    Then the alert dialog should show title and description

  Scenario: Verify alert dialog can be dismissed
    Given the user is on the Dialog page
    And the alert dialog is open
    When the user dismisses the alert dialog
    Then the alert dialog should be closed

  Scenario: Verify enter-name dialog can be opened
    Given the user is on the Dialog page
    When the user opens the enter-name dialog
    Then the dialog should contain the input, submit and cancel buttons with correct styles

  @smoke
  Scenario: Verify user can submit a name with enter-name dialog
    Given the user is on the Dialog page
    When the user opens the enter-name dialog
    And the user types a valid name
    And the user submits the name
    Then the submitted name should be displayed on the page
