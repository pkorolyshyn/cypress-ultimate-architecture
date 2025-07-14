import chartPage from '../pages/ChartPage';
import { Coords } from '../support/types';

export const chartSteps = {
  visitChartPage() {
    chartPage.visit();
  },

  hoverOverCountry(coords: Coords) {
    const { x, y } = coords;
    chartPage.pieChartCanvas.shouldBeVisible().hoverByCoords(x, y);
  },

  verifyTooltipContains(country: string, percentage: string) {
    chartPage.pieChartTooltip
      .shouldBeVisible()
      .shouldContainText(country)
      .shouldContainText(percentage);
  },
};
