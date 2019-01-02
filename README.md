# RAC Web Admin

## Dependencies
The only global dependencies necessary for this project are [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/)

Suggested version of Node: 10.8.0

## Getting Started

Install the Angular CLI 

```shell
npm i -g @angular/cli@latest
```

Get your development environment up and running locally
```shell
yarn && yarn start
```

This will install dependencies and run `node scripts/start.js`, exposing the app at `http://localhost:4200/`.

### Built With
This is an Angular project generated using [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3
and paired with the below technologies:
- [NgRx](https://github.com/ngrx) and [RxJS](https://github.com/ReactiveX/rxjs) for state management.
- [Angular Material](https://material.angular.io/) for base styling.
- [Jest](https://jestjs.io/) for testing.
- [TSLint](https://github.com/palantir/tslint) and [Prettier](https://github.com/prettier/prettier) for type checking and readability.


## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io) and [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `yarn help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Docker
- To run the project using Docker, run `./start.sh`.
- While running, your local site can be accessed from `http://localhost:4200`.
  - All necessary dependencies will be installed to the docker container
  - We're using a shared volume for the src directory so that changes made during development will be immediately visible
- To exit, type `Ctrl-C`.
