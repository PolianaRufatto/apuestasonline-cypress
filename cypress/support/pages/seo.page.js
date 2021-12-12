/// <reference types="Cypress" />

import { defaultElements } from '../elements';

class SeoPage {
  checkLength(element, quantity) {
    cy.get(element).should('have.length', quantity);
  }

  checkLengthGreaterThen(element, quantity) {
    cy.get(element).its('length').should('be.gte', quantity);
  }

  checkDescription(element, description) {
    cy.get(element).should('have.text', description);
  }

  checkMetaDescription(description) {
    cy.get(defaultElements.metaDescription()).should('have.attr', 'content').and('match', new RegExp(description));
  }

  checkTagAltImage() {
    cy.get(defaultElements.img()).each(($el) => {
      cy.wrap($el).should('have.attr', 'alt');
    });
  }

  checkCanonicalLink() {
    cy.url().then((url) => {
      cy.get(defaultElements.canonical()).should('have.attr', 'href').and('equal', url);
    });
  }

  checkLangAttr() {
    cy.get(defaultElements.html()).should('have.attr', 'lang');
  }

  checkLanguage(language) {
    cy.get(defaultElements.html()).should('have.attr', 'lang').and('match', new RegExp(language));
  }
}

export const seoPage = new SeoPage();
