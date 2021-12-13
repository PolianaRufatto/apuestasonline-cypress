import { commonPage } from '../pages';
import { performancePage } from '../pages/performance.page';

Given(/^I'm on the initial page$/, () => {
  commonPage.open();
});

When(/^I run the lighthouse$/, () => {
  performancePage.runLighthouse();
});

Then(/^the reporter has been created$/, () => {
  performancePage.checkLighthouseReport('tests-results/output/performanceReport.html');
});

