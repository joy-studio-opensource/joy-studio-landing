# Joy Studio Landing Page

Joy Studio landing page, developed using Next 13 with `app dir`.

---

## Folder Structure

Project structure for this joy studio landing page

```javascript
|__mocks__                 // Contain all mocks for test
|__tests__                 // Contain all test inside the project
|
|app                       // Entry point for the app.
|   |______(public)        // Contain all pages for public page / landing page.
|   |______back-office     // Contain all pages for back office / admin page.
|
|assets                    // Assets, images, fonts, styles, etc.
|   |___images
|   |______icon            // Contain icon for the project.
|   |______{another}       // Another related to images.
|
|components                // Contain global components or specific for some features.
|   |___base               // Contain base components or specific for some features.
|   |___public             // Contain base components for feature inside public layout.
|   |___{another}          // Another related to images.
|
|store                     // Contain redux / state management.
|   |___{feature-name}     // Contain base components or specific for some features.
|   |______rtk             // Contain rtk for specific feature.
|   |______slice           // Contain slice for specific feature.
|
|types                     // Contain types definition for the app.
|   |___{app}              // Contain types definition for the app feature.
|   |______api.type.ts     // Type definition for the API (response from Back-End).
|   |______common.type.ts  // Type definition common things inside Front-End.
|   |___{feature-name}     // Contain types definition for specific feature.
|
|{another}                 // Another folder that have specific purpose.
```

If you want to create folder outside declared above, you can create, but, don't forget to update this docs.

---

## Third Party Packages

- [next 13](https://beta.nextjs.org/docs)
- [react](https://reactjs.org/)
- [redux-toolkit](https://redux-toolkit.js.org/tutorials/quick-start)
- [antd](https://ant.design/)
- [tailwind](https://tailwindcss.com/)

---

## Installation

1; Install dependencies using yarn

```shell
yarn
```

---

## Installation (Using Docker)

1; Build project

```shell
docker-compose -f docker-compose-dev.yml up --build
```

---

## Available commands for linting

Run linter and will search for problems, but will not fix

```shell
yarn lint
```

Run linter and will search and try to fix the problems.

```shell
yarn lint:check
```

Run linter and will call prettier to fix the code style.

```shell
yarn lint:format
```

---

## Available commands for testing

It will go through all the test files and execute them. This command will also be used in pre-hooks and CI checks.

```shell
yarn test
```

This will watch all the test files. It is very useful while writing tests and quickly seeing results.

```shell
yarn test:watch
```

This command will update snapshots for all the presentational components. If the snapshot is not there, it will create it for you.

```shell
yarn test:update
```

As the name suggests, this command will generate a coverage report.

```shell
yarn test:coverage
```
