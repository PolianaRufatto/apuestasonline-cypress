import * as systemMessages from '../../fixtures/SystemMessages.constant';
import { defaultElements } from '../elements';
import { commonPage, robotsPage } from '../pages';

Given(/^I'm on the initial page$/, () => {
  commonPage.open();
});

When(/^I have a meta robots$/, () => {
  commonPage.searchElement(defaultElements.metaRobots);
});

When(/^I have a robots.txt file$/, () => {
  robotsPage.checkContentRobotsMeta();
});

Then(/^check the content$/, () => {
  robotsPage.checkContentRobotsMeta(systemMessages.META_ROBOTS_CONTENT);
});

Then(/^check if contains a Sitemap$/, () => {
  robotsPage.checkContentRobotsMeta(systemMessages.META_ROBOTS_CONTENT);
});
