/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { lighthouse, prepareAudit } = require('cypress-audit');
const fs = require('fs-extra');
const ReportGenerator = require('lighthouse/report/generator/report-generator');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu');
      return launchOptions;
    }
  });
  on('task', {
    lighthouse: lighthouse((lighthouseReport) => {
      fs.outputFileSync('tests-results/output/performanceReport.html', ReportGenerator.generateReport(lighthouseReport.lhr, 'html'));
    }),
  });
  on('file:preprocessor', cucumber());
  allureWriter(on, config);
  return config;
};
