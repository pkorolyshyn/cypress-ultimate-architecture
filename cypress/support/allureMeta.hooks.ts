// This file connects scenario tags from .feature files (like @CAL-101) to Allure metadata.
//
// Each `Before` hook runs before a tagged scenario and applies structured data to the Allure report.
// This includes fields like feature, story, severity, and ticket number.
//
// Just match the tag name here to the one used in your .feature file.
// No need to duplicate metadata inside the test or step definitions.

import { Before } from '@badeball/cypress-cucumber-preprocessor';
import AllureMeta from './utils/AllureMetaUtils';

Before({ tags: '@CAL-101' }, () => {
  new AllureMeta({
    feature: 'Calendar',
    story: 'Default selected date should be today',
    ticket: 'CAL-101',
    tags: ['calendar', 'smoke'],
    severity: 'critical',
  }).apply();
});

Before({ tags: '@CAL-102' }, () => {
  new AllureMeta({
    feature: 'Calendar',
    story: 'Today cell is visually highlighted',
    ticket: 'CAL-102',
    tags: ['calendar'],
    severity: 'minor',
  }).apply();
});
