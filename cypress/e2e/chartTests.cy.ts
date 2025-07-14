import { chartSteps } from '../steps/chartSteps';

describe('Pie chart tooltip behavior', { tags: ['@smoke', '@chart'] as const }, () => {
  beforeEach(() => {
    chartSteps.visitChartPage();
  });

  it('should display tooltip with correct data for USA', () => {
    chartSteps.hoverOverCountry({ x: -20, y: 0 });
    chartSteps.verifyTooltipContains('USA', '63.78%');
  });

  it('should display tooltip with correct data for France', () => {
    chartSteps.hoverOverCountry({ x: 20, y: 20 });
    chartSteps.verifyTooltipContains('France', '12.77%');
  });
});
