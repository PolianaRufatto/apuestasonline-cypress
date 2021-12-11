/// <reference types="Cypress" />

class MenuPage {
  checkMenuItems(element, data) {
    cy.get(element).each(($el, i) => {
      expect($el).to.have.text(data[i].name);
    });
  }

  checkSubMenuItems(element, data) {
    cy.get(element).each(($el, i) => {
      expect($el).to.have.text(data.SubMenus[i]);
    });
  }

  openMenu(menu) {
    cy.get(menu).click();
  }
}

export const menuPage = new MenuPage();
