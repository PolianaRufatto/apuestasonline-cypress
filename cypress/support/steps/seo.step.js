/* eslint-disable no-magic-numbers */
import { defaultElements } from '../elements';
import { commonPage, seoPage } from '../pages';

Given(/^I'm on the initial page$/, () => {
  commonPage.open();
});

When(/^have an h1 element$/, () => {
  commonPage.searchElement(defaultElements.h1());
});

When(/^have an h2 element$/, () => {
  commonPage.searchElement(defaultElements.h2());
});

When(/^have images$/, () => {
  commonPage.searchElement(defaultElements.img());
});

When(/^have a title$/, () => {
  commonPage.searchElement(defaultElements.title());
});

When(/^I have an h3 element$/, () => {
  commonPage.searchElement(defaultElements.h3());
});

When(/^I have an h4 element$/, () => {
  commonPage.searchElement(defaultElements.h4());
});

When(/^have a canonical link$/, () => {
  commonPage.searchElement(defaultElements.canonical());
});

When(/^I have a html tag$/, () => {
  commonPage.searchElement(defaultElements.html());
});

Then(/^verify if have only one h1 element$/, () => {
  seoPage.verifyQuantity(defaultElements.h1(), 1);
});

Then(/^have the descption '([^"]*)'$/, (descr) => {
  seoPage.verifyDescription(defaultElements.h1(), descr);
});

Then(/^verify if have at least 2$/, () => {
  seoPage.verifyQuantity(defaultElements.h2(), 7);
});

Then(/^all have alt tags$/, () => {
  seoPage.verifyTagAltImage();
});

Then(/^the title have the description '([^"]*)'$/, (descr) => {
  seoPage.verifyDescription(defaultElements.title(), descr);
});

Then(/^the meta description is '([^"]*)'$/, (descr) => {
  commonPage.searchElement(defaultElements.metaDescription());
  seoPage.verifyMetaDescription(descr);
});

Then(/^it was valid$/, () => {
  seoPage.verifyCanonicalLink();
});

Then(/^verify if have multiple h3$/, () => {
  seoPage.verifyQuantity(defaultElements.h3(), 24);
});

Then(/^verify if have multiple h4$/, () => {
  seoPage.verifyQuantity(defaultElements.h4(), 5);
});

Then(/^the tag has a attrib lang$/, () => {
  seoPage.verifyLangAttr();
});

Then(/^the language is '(.+)'$/, (language) => {
  seoPage.verifyLanguage(language);
});
