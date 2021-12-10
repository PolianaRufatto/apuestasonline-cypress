/// <reference types="Cypress" />

class MenuPage {
  verifyMenuItemsText() {
    const data = ['Casas de Apuestas', 'Bonos', 'Latinoamérica', 'Deportes', 'Pagos', 'Casinos', 'Poker', 'eSports'];
    cy.get('#navigation-menu-items > div > span:nth-child(1)').each(($el, i) => {
      expect($el).to.have.text(data[i]);
    });
  }
}

export const menuPage = new MenuPage();
