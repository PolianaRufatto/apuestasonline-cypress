/* eslint-disable no-magic-numbers */
import { context } from '../../fixtures/Context';
import { menuElements } from '../elements';
import { menuPage, seoPage } from '../pages';

Given(/^I'm on the initial page$/, () => {
  seoPage.open();
});

When(/^I have a navigation menu on top$/, () => {
  seoPage.searchElement(menuElements.navigationMenu);
});

When(/^I have a menu call (.*)$/, (index) => {
  seoPage.searchElement(menuElements.navigationMenuItemsIndex(index));
});

When(/^I open this menu (.*)$/, (index) => {
  menuPage.openMenu(menuElements.menuItem(index));
});

Then(/^should have the menu items$/, () => {
  menuPage.verifyMenuItems(menuElements.navigationMenuItems(), context.data.Menus);
});

Then(/^should show the submenu items from (.*)$/, (index) => {
  menuPage.verifySubMenuItems(menuElements.subMenuItems(), context.data.Menus[index - 1]);
});
