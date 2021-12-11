/// <reference types="Cypress" />

class MenuPage {
  verifyMenuItems(element, data) {
    cy.get(element).each(($el, i) => {
      expect($el).to.have.text(data[i].name);
    });
  }

  verifySubMenuItems(element, data) {
    cy.get(element).each(($el, i) => {
      expect($el).to.have.text(data.SubMenus[i]);
    });
  }

  openMenu(menu) {
    cy.get(menu).click();
  }
}

export const menuPage = new MenuPage();
