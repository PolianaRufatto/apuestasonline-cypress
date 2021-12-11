/// <reference types="Cypress" />

class SeoPage {
  verifyQuantity(element, quantity) {
    cy.get(element).should('have.length', quantity);
  }

  verifyDescription(element, description) {
    cy.get(element).contains(description);
  }

  verifyMetaDescription(description) {
    cy.get('meta[name="description"]').should('have.attr', 'content').and('match', new RegExp(description));
  }

  verifyTagAltImage() {
    cy.get('img').each(($el) => {
      cy.wrap($el).should('have.attr', 'alt');
    });
  }

  verifyCanonicalLink() {
    cy.url().then((url) => {
      cy.get('link[rel="canonical"]').should('have.attr', 'href').and('equal', url);
    });
  }

  verifyLangAttr() {
    cy.get('html').should('have.attr', 'lang');
  }

  verifyLanguage(language) {
    cy.get('html').should('have.attr', 'lang').and('match', new RegExp(language));
  }
}

export const seoPage = new SeoPage();
