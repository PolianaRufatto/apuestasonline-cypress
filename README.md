# 🚀 E2E tests with [Cypress](https://www.cypress.io/) and [Cucumber](https://www.cucumber.io/)

<p align="center">
  <img src="https://media.giphy.com/media/f6RQunjGphgB1GEVkO/giphy.gif" width="300">
</p>

[![Apuestas Online Cypress Tests](https://github.com/PolianaRufatto/apuestasonline-cypress/actions/workflows/main.yml/badge.svg)](https://github.com/PolianaRufatto/apuestasonline-cypress/actions/workflows/main.yml)

This project is a response to the challenge presented by [KaFe Rocks](https://kafe.rocks/) and focuses on automating tests for the [APUESTAS ONLINE](https://apuestasonline.net/) website. The tests are implemented in JavaScript using [Cypress](https://www.cypress.io/) and [Cucumber](https://www.cucumber.io/).

## 📝 Table of Contents
 - [🧐 What's Inside?](#-whats-inside)
  - [🔄 Continuous Integration](#-continuous-integration)
 - [🏁 Getting Started](#-getting-started)
   - [🛠️ Install the dependencies](#️-install-the-dependencies)
 - [🏃 Run e2e tests](#-run-e2e-tests)
 - [💅 Prettier and Eslint](#-prettier-and-eslint)
 - [🥒 Gherkin lint](#-gherkin-lint)
 - [📊 Reports](#-reports)
   - [💻 Generate and open Allure report locally](#-generate-and-open-allure-report-locally)
   - [🚦 GitHub Actions Test Results](#-github-actions-test-results)
 - [⏭️ Next Features and Improvements](#️-next-features-and-improvements)

## 🧐 What's Inside?
This project incorporates several key elements, including:
- Page Object Pattern
- [Gherkin lint](https://github.com/vsiakka/gherkin-lint) for maintaining organized .feature files
- [Eslint](https://eslint.org/) for JavaScript linting
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://github.com/typicode/husky) for pre-commit and pre-push hooks
- [Allure Report](http://allure.qatools.ru/) for detailed test reporting
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) for performance testing

### 🔄 Continuous Integration
- **GitHub Actions:** Automated builds and tests
- **GitHub Pages:** Hosting for generated reports

## 🏁 Getting Started
### 🛠️ Install the dependencies:
```bash
yarn upgrade && yarn
```

## 🏃 Run e2e tests:
```bash
yarn test:run
```

## 💅 Prettier and Eslint
Ensure code consistency with Prettier and Eslint
Running code format:
```bash
yarn code:format
```

## 🥒 Gherkin lint
Maintain organized feature files with Gherkin lint
Running Ghergin format code:
```bash
yarn code:gherkin
```

## 📊 Reports
### 💻 Generate and open Allure report locally
```bash
yarn allure:generate && yarn allure:open
```

### 🚦 GitHub Actions Test Results
- **Allure Report:** [GitHub Pages - Allure Report](https://polianarufatto.github.io/apuestasonline-cypress/)
- **Performance Report:** [GitHub Pages - Performance Report](https://polianarufatto.github.io/apuestasonline-cypress/performanceReport.html)
- **Failed Links:** [GitHub Pages - Failed Links](https://polianarufatto.github.io/apuestasonline-cypress/FailedLinks.txt)

## ⏭️ Next Features and Improvements
- Implement parallel test execution
- Adjust default values for Lighthouse performance tests
