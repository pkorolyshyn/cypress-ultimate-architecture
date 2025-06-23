Feature: Smart Table

  @smartTable @smoke
  Scenario: Verify first-name column contains expected data
    Given the user is on the Smart Table page
    Then the first-name column should be displayed with correct names

  Scenario: Verify table headers are correct
    Given the user is on the Smart Table page
    Then the table should be displayed with correct headers
