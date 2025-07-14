import BasePage from '../core/BasePage';

class ChartPage extends BasePage {
  protected url = '/pages/charts/echarts';

  private readonly selectors = {
    pieChartCanvas: "[data-testid='pie-chart']",
    pieChartTooltip: `[data-testid='chart-tooltip']`,
  } as const;

  public get pieChartCanvas() {
    return this.select(this.selectors.pieChartCanvas);
  }

  public get pieChartTooltip() {
    return this.select(this.selectors.pieChartTooltip);
  }
}

const chartPage = new ChartPage();
export default chartPage;
