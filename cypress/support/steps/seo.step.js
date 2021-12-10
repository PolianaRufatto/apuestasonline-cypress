/* eslint-disable no-magic-numbers */
import * as systemMessages from '../../fixtures/SystemMessages.constant';
import { defaultElements } from '../elements';
import { seoPage } from '../pages';

Given(/^I'm on the initial page$/, () => {
  seoPage.open();
});

When(/^have an h1 element$/, () => {
  seoPage.searchElement(defaultElements.h1);
});

When(/^have an h2 element$/, () => {
  seoPage.searchElement(defaultElements.h2);
});

When(/^have images$/, () => {
  seoPage.searchElement(defaultElements.img);
});

When(/^have a title$/, () => {
  seoPage.searchElement(defaultElements.title);
});

When(/^I have an h3 element$/, () => {
  seoPage.searchElement(defaultElements.h3);
});

When(/^I have an h4 element$/, () => {
  seoPage.searchElement(defaultElements.h4);
});

When(/^have a canonical link$/, () => {
  seoPage.searchElement(defaultElements.canonical);
});

When(/^I have a html tag$/, () => {
  seoPage.searchElement(defaultElements.canonical);
});

Then(/^verify if have only one h1 element$/, () => {
  seoPage.verifyQuantity(defaultElements.h1, 1);
});

Then(/^have the descption 'ApuestasOnline.net: Las mejores apuestas online de España'$/, () => {
  seoPage.verifyDescription(defaultElements.h1, systemMessages.H1_TITLE);
});

Then(/^verify if have at least 2$/, () => {
  seoPage.verifyQuantity(defaultElements.h2, 7);
});

Then(/^all have alt tags$/, () => {
  seoPage.verifyTagAltImage();
});

Then(/^the title have the description 'Mejores apuestas online 2021 → Ranking España y Latam'$/, () => {
  seoPage.verifyDescription('title', systemMessages.HEAD_TITLE);
});

Then(
  /^the meta description is 'Comparador de apuestas que analiza en detalle: cuotas, deportes, promos, app, seguridad y la mejor oferta de apuestas online España y Latam en diciembre 2021'$/,
  () => {
    seoPage.searchElement(defaultElements.metaDescription);
    seoPage.verifyMetaDescription(systemMessages.META_DESCRIPTION);
  },
);

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
