import { defaultElements } from '../elements';
import { commonPage, urlPage } from '../pages';

Given(/^I'm on the initial page$/, () => {
  commonPage.open();
});

When(/^I have a link$/, () => {
  commonPage.searchElement(defaultElements.link());
});

Then(/^check if all the links are working$/, () => {
  urlPage.checkURLs();
});
