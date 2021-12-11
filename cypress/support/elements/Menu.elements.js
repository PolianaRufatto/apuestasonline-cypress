class MenuElements {
  navigationMenu = () => '#navigation-menu-items';
  navigationMenuItems = () => '#navigation-menu-items > div > span:nth-child(1)';
  navigationMenuItemsIndex = (index) => `#navigation-menu-items > div:nth-child(${index})`;
  subMenuItems = () => '#navigation-sub-menus > div[data-show="true"] > div.navigation-sub-menu-item> a > span';
  menuItem = (index) => `#navigation-menu-items > div:nth-child(${index}) > span:nth-child(1)`;
}

export const menuElements = new MenuElements();
