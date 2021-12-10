/* eslint-disable no-magic-numbers */
import * as systemMessages from '../../fixtures/SystemMessages.constant';
import { seoPage } from '../pages';

Given(/^I'm on the initial page$/, () => {
  seoPage.open();
});

When(/^have an h1 element$/, () => {
  seoPage.searchElement('h1');
});

When(/^have an h2 element$/, () => {
  seoPage.searchElement('h2');
});

When(/^have images$/, () => {
  seoPage.searchElement('img');
});

When(/^have a title$/, () => {
  seoPage.searchElement('title');
});

When(/^I have an h3 element$/, () => {
  seoPage.searchElement('h3');
});

When(/^I have an h4 element$/, () => {
  seoPage.searchElement('h4');
});

When(/^have a canonical link$/, () => {
  seoPage.searchElement('link[rel="canonical"]');
});

When(/^I have a html tag$/, () => {
  seoPage.searchElement('html');
});

Then(/^verify if have only one h1 element$/, () => {
  seoPage.verifyQuantity('h1', 1);
});

Then(/^have the descption '(.+)'$/, (description) => {
  seoPage.verifyDescription('h1', systemMessages.H1_TITLE);
});

Then(/^verify if have at least 2$/, () => {
  seoPage.verifyQuantity('h2', 7);
});

Then(/^all have alt tags$/, () => {
  seoPage.verifyTagAltImage();
});

Then(/^the title have the descption '(.+)'$/, (description) => {
  seoPage.verifyDescription('title', systemMessages.HEAD_TITLE);
});

Then(/^the meta description is '(.+)'$/, (description) => {
  seoPage.searchElement('meta[name="description"]');
  seoPage.verifyMetaDescription(systemMessages.META_DESCRIPTION);
});

Then(/^it was valid$/, () => {
  seoPage.verifyCanonicalLink();
});

Then(/^verify if have multiple h3$/, () => {
  seoPage.verifyQuantity('h3', 24);
});

Then(/^verify if have multiple h4$/, () => {
  seoPage.verifyQuantity('h4', 5);
});

Then(/^the tag has a attrib lang$/, () => {
  seoPage.verifyLangAttr();
});

Then(/^the language is '(.+)'$/, (language) => {
  seoPage.verifyLanguage(language);
});
