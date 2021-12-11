const url = Cypress.config('baseUrl');

class RobotsPage {
  checkContentRobotsMeta(value) {
    cy.get('head').get('meta[name="robots"]').should('have.prop', 'content').and('equal', value);
  }

  checkRobotsFile() {
    cy.request(`${url}/robots.txt`).its('body').should('include', `Sitmap: ${url}/sitemap_index.xml`);
  }

  checkSitemap() {
    cy.request(`${url}//sitemap_index.xml`).its('body').should('include', 'XML Sitemap');
  }
}

export const robotsPage = new RobotsPage();
