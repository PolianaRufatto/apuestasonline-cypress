import { defaultElements } from '../elements';

class UrlPage {
  checkURLs() {
    cy.get(defaultElements.a).each((link) => {
      cy.request(link.prop('href'));
    });
  }
}

export const urlPage = new UrlPage();
