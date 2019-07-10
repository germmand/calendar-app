# Calendar-App · [![CircleCI](https://circleci.com/gh/germmand/calendar-app.svg?style=shield)](https://circleci.com/gh/germmand/calendar-app)

Calendar-App is a POC (Proof-of-concept) application that allows users to set reminders within a calendar.

## Installation

Clone the repository using git:

```bash
$ git clone --depth 1 git@github.com:germmand/calendar-app.git
```

Or if using https:

```bash
$ git clone --depth 1 https://github.com/germmand/calendar-app.git
```

Cd into the project folder to install its dependencies using the [yarn](https://yarnpkg.com/en/) package manager:

```bash
cd calendar-app && yarn install
```

Finally you just need to start the project by running:

```bash
$ yarn start
```

And that's it, the application should be running on port 3000 now. :)
Visit: 

`http://localhost:3000/` 

and you're good to go.

## Optional · Running tests and checking for linting errors.

To run the test suite, simply run in the project folder:

```bash
$ yarn test
```

If you have modified the source code, you can check for linting errors, by simply running:

```bash
$ yarn lint
```

If some errors were encountered during the linting proccess and some of them can be fixed automatically you can run:


```bash
$ yarn lintfix
```

And [Prettier](https://prettier.io/) will take care of it for you. :)
