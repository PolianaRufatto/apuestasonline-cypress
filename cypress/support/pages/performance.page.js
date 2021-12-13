class PerformancePage {
  runLighthouse() {
    const customThresholds = {
      performance: 10,
      accessibility: 10,
      seo: 10,
      'best-practices': 10,
      pwa: 0,
    };
  
    const desktopConfig = {
      extends: 'lighthouse:default',
      formFactor: 'desktop',
      screenEmulation: {disabled: true}
    };
    cy.lighthouse(customThresholds, desktopConfig);
  }

  checkLighthouseReport(path) {
    cy.readFile(path).should('exist');
  }
}

export const performancePage = new PerformancePage();