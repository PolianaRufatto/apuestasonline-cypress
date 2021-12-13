/* eslint-disable no-magic-numbers */
class UrlPage {
  checkURLs() {
    let URLs = [];
    let IDs = [];
    cy.get('body')
      .get('a')
      .each((link) => {
        if (link.prop('href')) {
          cy.log(link.prop('href'));
          cy.request({ url: link.prop('href'), failOnStatusCode: false }).then((response) => {
            if (response.status !== 200) {
              URLs.push(link.prop('href'));
            }
          });
        } else {
          IDs.push(link.prop('id'));
        }
      })
      .then(() => {
        if (URLs.length > 0 || IDs.length > 0) {
          cy.writeFile('tests-results/output/FailedLinks.txt', {'Not working URLs ': URLs, 'Links without href property': IDs});
        }
      });
  }
}

export const urlPage = new UrlPage();
