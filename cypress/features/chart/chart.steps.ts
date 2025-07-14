import chartPage from '../../pages/ChartPage';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('the user visits the Chart page', () => {
  chartPage.visit();
});

When('the user hovers on the USA pie slice', () => {
  chartPage.pieChartCanvas.shouldBeVisible().hoverByCoords(-20, 0);
});

When('the user hovers on the France pie slice', () => {
  chartPage.pieChartCanvas.shouldBeVisible().hoverByCoords(20, 20);
});

// Next step definition shows how to pass variables from .feature files into tests.
// `{string}` placeholders are taken from the feature scenario and passed as arguments (country and percentage).
//
// Example usage in the feature file:
//   Then the tooltip should contain "USA" and "63.78%"
//
// While this is supported, we generally don’t recommend it for most cases,
// since hardcoding dynamic values in .feature files can make test data harder to maintain.
// That said, it’s totally up to you and can be useful in specific situations.

Then('the tooltip should contain {string} and {string}', (country: string, percentage: string) => {
  chartPage.pieChartTooltip
    .shouldBeVisible()
    .shouldContainText(country)
    .shouldContainText(percentage);
});
