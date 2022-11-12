# hello.cypress

A blueprint getting started with [Cypress.io](https://www.cypress.io/)

## My-App

A sample React App, bootstrapped with [Create React App (TypeScript)](https://create-react-app.dev/docs/adding-typescript/#installation)

```shell
$ cd my-app
$ npm install
# Run the app -> http://localhost:3000
$ npm start

# In another terminal, run e2e-tests
$ npm run test:e2e
...
       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  sample-spec.cy.js                        479ms        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        479ms        1        1        -        -        -
```

## Cypress

A container executing e2e-tests suitable for a CI/CD pipeline.

```shell
docker-compose run --rm cypress
```

## References

- [Cypress.io](https://www.cypress.io/)
- [Cypress.io - Docker](https://docs.cypress.io/guides/guides/continuous-integration.html#Docker)
- [Cypress.io - Command Line](https://docs.cypress.io/guides/guides/command-line)

### Alternatives

- [TestCafe](https://devexpress.github.io/testcafe/)
- [TestCafe vs Cypress: Core Differences](https://www.browserstack.com/guide/testcafe-vs-cypress)
