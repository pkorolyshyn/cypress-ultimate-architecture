// ✅ AllureMeta is a helper class for applying structured metadata to Allure test reports.
//
// It centralizes the assignment of Allure tags like feature, story, severity, owner, and ticket,
// making your tests easier to categorize, filter, and trace back to requirements (e.g., Jira).
//
// Instead of repeating multiple `allure.*()` calls inside each test,
// you can simply instantiate this class and call `.apply()` with relevant metadata.
//
// ✅ Example usage in BDD tests (inside `allureMeta.hooks.js`):
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

class AllureMeta {
  static baseJiraUrl = 'https://your-jira-url/browse/';

  constructor({
    feature,
    story,
    ticket,
    tags = [],
    severity = 'normal',
    epic = 'Components',
    owner = 'QA Automation',
  }) {
    this.feature = feature;
    this.story = story;
    this.ticket = ticket;
    this.tags = tags;
    this.severity = severity;
    this.epic = epic;
    this.owner = owner;
  }

  apply() {
    const allure = Cypress.Allure.reporter.getInterface();

    allure.epic(this.epic);
    allure.feature(this.feature);
    allure.story(this.story);
    allure.owner(this.owner);
    allure.severity(this.severity);

    this.tags.forEach(tag => allure.tag(tag));

    if (this.ticket) {
      allure.link(this.ticket, `${AllureMeta.baseJiraUrl}${this.ticket}`, 'issue');
    }
  }
}

export default AllureMeta;
