/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');

class CommonPage {
  open() {
    cy.visit(url);
  }

  searchElement(element) {
    cy.get(element).should('exist');
  }
}

export const commonPage = new CommonPage();
