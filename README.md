# E2E tests with [Cypress](https://www.cypress.io/) and [Cucumber](https://www.cucumber.io/)

This is a project made as a challenge to [KaFe Rocks](https://kafe.rocks/), that consists of an automated tests to the website [APUESTAS ONLINE](https://apuestasonline.net/).
These tests are implemented in JavaScript with [Cypress](https://www.cypress.io/) and [Cucumber](https://www.cucumber.io/).

## What is inside?
This project uses lot of stuff as:
- Page Object Pattern
- [Gherkin lint](https://github.com/vsiakka/gherkin-lint)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Allure Report](http://allure.qatools.ru/)

## Continues Integration
- GitHub Actions
- GitHub Pages

## Getting Started
Installing dependencies: 
```bash
yarn upgrade && yarn
```

Running e2e tests:
```bash
yarn test:run
```

## Prettier and Eslint
Running code format:
```bash
yarn code:format
```

## Gherkin lint
This project use [Gherkin lint](https://github.com/vsiakka/gherkin-lint) to keep the files `.feature` organized.
Running Ghergin format code:
```bash
yarn code:gherkin
```

## Reports
### Generate and open Allure report locally
```bash
yarn allure:generate && yarn allure:open
```

### Tests results from GitHub Actions
- Allure Report: https://polianarufatto.github.io/apuestasonline-cypress/
- Performance Report: https://polianarufatto.github.io/apuestasonline-cypress/performanceReport.html
- Failed Links: https://polianarufatto.github.io/apuestasonline-cypress/FailedLinks.txt

## Next features/improvements
- Run tests in parallel
- Ajust default values for lighthouse performance test
