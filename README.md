# a7-product-management

I was given an interesting coding exercise last week by a potential employer and decided to share my solution as a suggested base architecture for others doing Angular7/NGRX applications. 

The coding exercise was as follows: 

## Lead Developer Test

### Intro and Goals

Your objective is to build a front end web client that uses the provided web API and meets the
requirements outlined below.

### The goal of the test is to understand how you:
 - Create an intuitive and user friendly experience
 - Develop for maintainability, reusability, and readability of code
 - Make decision on controls, layout, and transitions between components (if applicable)
 - Make asynchronous calls to the web services and only pull data you need
 - Manage JWT Token and authentication with the web API

You are free to deliver the test via zip file, Google Drive, GitHub, etc.

Bonus points if you set up a hosted and fully-functioning app.

### Requirements

Our web API allows a user to create and edit products. Users can also associate a product with
one or more categories. Your front end should support the following needs:

 - User is able to view a summary list of products: name and description
 - User is able to view additional details: name, description, URL, and categories
 - User is able to edit an existing product
 - User is able to create a new product
   - When a user is creating or editing a product:
   - User can change all four properties: name, description, URL, and categories.
   - User has a choice to add zero or many categories to the product.

Note: We intentionally left the product list empty so that you can create your own test data.

Please use the API to create product records.

### Technical Requirements

Your solution must interface with this web API: https://gdm-interview-api.azurewebsites.net/ 

You may use Angular 4 or higher, ReactJS, or VueJS for the front end (we use Angular). You are free to implement the user interface, design, and styling in any way that meet the requirements.

### Additional Details
 - Our API is documented in Swagger. Use the provided JWT Token in the Api Key field to execute endpoints as needed.
 - CORS allows a connection from any domain. If issues come up, please contact us.
 - Product has the following fields:
   - ProductId: Integer, Primary Key unique identifier.
   - Name: String, 50 characters max. Required field.
   - Description: String, 200 characters max. Not required.
   - Url: String, 500 characters max. Not required.
   - Categories cannot be created or edited. They can only be retrieved and related to products.

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
