// ✅ AllureMeta is a helper class for applying structured metadata to Allure test reports.
//
// It centralizes the assignment of Allure tags like feature, story, severity, owner, and ticket,
// making your tests easier to categorize, filter, and trace back to requirements (e.g., Jira).
//
// Instead of repeating multiple `allure.*()` calls inside each test,
// you can simply instantiate this class and call `.apply()` with relevant metadata.
//
// ✅ Example usage in BDD tests (inside `allureMeta.hooks.ts`):
//
//   // Add tag inside your .feature file
//   // e.g., @CAL-102
//
//   // Then register metadata with a hook:
//   Before({ tags: '@CAL-102' }, () => {
//     new AllureMeta({
//       feature: 'Calendar',
//       story: 'Today cell is visually highlighted',
//       ticket: 'CAL-102',
//       tags: ['calendar'],
//       severity: 'minor',
//     }).apply();
//   });
//
// This will attach all the defined metadata to the test in the Allure report.
// Find more at: https://allurereport.org/docs/cypress/

export type AllureSeverity = 'trivial' | 'minor' | 'normal' | 'critical' | 'blocker';

export interface AllureMetaOptions {
  feature: string;
  story: string;
  ticket: string;
  tags?: string[];
  severity?: AllureSeverity;
  epic?: string;
  owner?: string;
}

class AllureMeta {
  static readonly baseJiraUrl = 'https://your-jira-url/browse/';

  constructor(private readonly opts: AllureMetaOptions) {}

  public apply(): void {
    const allure = Cypress.Allure.reporter.getInterface();

    const {
      feature,
      story,
      ticket,
      tags = [],
      severity = 'normal',
      epic = 'Components',
      owner = 'QA Automation',
    } = this.opts;

    allure.epic(epic);
    allure.feature(feature);
    allure.story(story);
    allure.owner(owner);
    allure.severity(severity);

    for (const tag of tags) {
      allure.tag(tag);
    }

    if (ticket) {
      allure.link(ticket, `${AllureMeta.baseJiraUrl}${ticket}`, 'issue');
    }
  }
}

export default AllureMeta;
