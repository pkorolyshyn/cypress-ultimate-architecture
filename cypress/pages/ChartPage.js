import BasePage from '../core/BasePage';

class ChartPage extends BasePage {
  url = '/pages/charts/echarts';

  selectors = {
    pieChartCanvas: "[data-testid='pie-chart']",
    pieChartTooltip: `[data-testid='chart-tooltip']`,
  };

  get pieChartCanvas() {
    return this.select(this.selectors.pieChartCanvas);
  }

  get pieChartTooltip() {
    return this.select(this.selectors.pieChartTooltip);
  }
}

const chartPage = new ChartPage();
export default chartPage;
