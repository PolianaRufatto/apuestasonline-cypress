# E2E tests with [Cypress](https://www.cypress.io/) and [Cucumber](https://www.cucumber.io/)

This is a project made as a challenge to [KaFe Rocks](https://kafe.rocks/), that consists of do automated tests to the website [APUESTAS ONLINE](https://apuestasonline.net/).
These tests are developed in JavaScript with [Cypress](https://www.cypress.io/) and [Cucumber](https://www.cucumber.io/).


## What is inside?

This project uses lot of stuff as:
- Page Object Pattern
- [Gherkin lint](https://github.com/vsiakka/gherkin-lint)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)


## Getting Started

Install the dependencies: 
```bash
yarn dev
```

Run e2e tests:
```bash
yarn test:run
```

## Prettier and Eslint
Run to format the code:
```bash
yarn code:format
```

## Gherkin lint
This project use [Gherkin lint](https://github.com/vsiakka/gherkin-lint) to keep the files `.feature` organized.
Run to format the code:
```bash
yarn code:gherkin
```