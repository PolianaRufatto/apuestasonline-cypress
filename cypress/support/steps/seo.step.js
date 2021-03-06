/* eslint-disable no-magic-numbers */
import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
import { defaultElements } from '../elements';
import { commonPage, seoPage } from '../pages';

const month = dayjs().locale('es').format('MMMM');
const year = dayjs().format('YYYY');

Given(/^I'm on the initial page$/, () => {
  commonPage.open();
});

When(/^I have an h1 element$/, () => {
  commonPage.searchElement(defaultElements.h1());
});

When(/^I have an h2 element$/, () => {
  commonPage.searchElement(defaultElements.h2());
});

When(/^I have images$/, () => {
  commonPage.searchElement(defaultElements.img());
});

When(/^I have a title$/, () => {
  commonPage.searchElement(defaultElements.title());
});

When(/^I have an h3 element$/, () => {
  commonPage.searchElement(defaultElements.h3());
});

When(/^I have an h4 element$/, () => {
  commonPage.searchElement(defaultElements.h4());
});

When(/^I have a canonical link$/, () => {
  commonPage.searchElement(defaultElements.canonical());
});

When(/^I have a html tag$/, () => {
  commonPage.searchElement(defaultElements.html());
});

Then(/^check if has only one h1 element$/, () => {
  seoPage.checkLength(defaultElements.h1(), 1);
});

Then(/^the h1 descption is '([^"]*)'$/, (descr) => {
  seoPage.checkDescription(defaultElements.h1(), descr);
});

Then(/^check if has at least 2$/, () => {
  seoPage.checkLengthGreaterThen(defaultElements.h2(), 2);
});

Then(/^check if all has alt tags$/, () => {
  seoPage.checkTagAltImage();
});

Then(/^check if the title is correct$/, () => {
  const description = `Mejores apuestas online ${year} → Ranking España y Latam`
  seoPage.checkDescription(defaultElements.title(), description);
});

Then(/^check if the meta description is correct$/, () => { 
  const description = `Comparador de apuestas que analiza en detalle: cuotas, deportes, promos, app, seguridad y la mejor oferta de apuestas online España y Latam en ${month} ${year}`;
  commonPage.searchElement(defaultElements.metaDescription());
  seoPage.checkMetaDescription(description);
});

Then(/^it is valid$/, () => {
  seoPage.checkCanonicalLink();
});

Then(/^check if has multiple h3$/, () => {
  seoPage.checkLength(defaultElements.h3(), 24);
});

Then(/^check if has multiple h4$/, () => {
  seoPage.checkLength(defaultElements.h4(), 5);
});

Then(/^the tag has a attribute lang$/, () => {
  seoPage.checkLangAttr();
});

Then(/^the value is set to '(.+)'$/, (language) => {
  seoPage.checkLanguage(language);
});
