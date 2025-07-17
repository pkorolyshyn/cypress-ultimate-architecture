import chartPage from '../pages/ChartPage';

export const chartSteps = {
  visitChartPage() {
    chartPage.visit();
  },

  hoverOverCountry(coords = {}) {
    chartPage.pieChartCanvas.shouldBeVisible().hoverByCoords(coords.x, coords.y);
  },

  verifyTooltipContains(country, percentage) {
    chartPage.pieChartTooltip
      .shouldBeVisible()
      .shouldContainText(country)
      .shouldContainText(percentage);
  },
};
