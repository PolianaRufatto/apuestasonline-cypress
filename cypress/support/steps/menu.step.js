import { menuElements } from '../elements';
import { menuPage, seoPage } from '../pages';

Given(/^I'm on the initial page$/, () => {
  seoPage.open();
});

When(/^I have a navigation menu on top$/, () => {
  seoPage.searchElement(menuElements.navigationMenu);
});

Then(/^should have the menu itens$/, () => {
  menuPage.verifyMenuItemsText();
});
