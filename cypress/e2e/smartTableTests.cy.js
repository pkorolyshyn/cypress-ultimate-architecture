import smartTableSteps from '../steps/smartTableSteps';

describe('Smart Table behavior', { tags: '@smartTable' }, () => {
  beforeEach(() => {
    smartTableSteps.visitSmartTablePage();
  });

  it('should display correct first names in the list', { tags: '@smoke' }, () => {
    smartTableSteps.verifyTableFirstNames();
  });

  it('should display the correct table headers', () => {
    smartTableSteps.verifyTableHeaders();
  });
});
