# NODEJS API STARTER PACK

## Dependencies
- [Nodejs](https://nodejs.org/en/)
- [express 4+](http://expressjs.com/)
- [heroku][https://www.heroku.com]
- [eslint][http://eslint.org/]

## Configuration
- Edit configuration in `config/default.json` and
- custom environment variables names in `config/custom-environment-variables.json`,
- for example it will read **API_VERSION** as version from heroku.

Following variables can be configured:
- `authSecret` the secret for auth
- `port` the port to listen
- `logLevel` the log level `debug` or `info`
- `version` the version of api

## Heroku deployment

- You will need to install [Heroku Toolbelt](https://toolbelt.heroku.com/) for this step if you don't already have it installed.

- In the main project folder, run the following commands:

        heroku login
        git init
        git add .
        git commit -m "init"
        heroku create
        git push heroku master
        heroku logs -t
        heroku open


## Local Deployment

- Install dependencies `npm i`
- run lint check `npm run lint`
- Start app `npm start`

## Authentication & Authorization

- It will use  [passport](http://passportjs.org/) and it could support social feature to login as twitter, facebook easily.
- It will use `src/app-passport.js` to load passport strategies in **src/passports**, you can define `auth:{name of passport strategy}` in `routes.js` of module.
- You can also define `access:[role1,role2]`, the user role name is from `src/constants.js`.
- It will check Authentication & Authorization in `src/app-routes.js` to secure your APIs.
