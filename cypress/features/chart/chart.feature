Feature: Pie-chart tooltip

  @chart @smoke
  Scenario: Verify tooltip has correct data for USA
    Given the user visits the Chart page
    When the user hovers on the USA pie slice
    Then the tooltip should contain "USA" and "63.78%"

  Scenario: Verify tooltip has correct data for France
    Given the user visits the Chart page
    When the user hovers on the France pie slice
    Then the tooltip should contain "France" and "12.77%"
