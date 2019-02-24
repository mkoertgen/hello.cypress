# hello.cypress

A blueprint getting started with [Cypress.io](https://www.cypress.io/)

## My-App

A sample React App.

```console
cy my-app
npm install
npx cy:run
```

## Cypress (Cached)

A container using a global installation of cypress (cached in a docker volume after 1st run)

```console
docker-compose run --rm cypress-cached
```

## Cypress (preinstalled)

A container using a preinstalled, global installation of cypress (Cypress 3.0.2 as of now)

```console
docker-compose run --rm cypress-preinstalled
```
