# Jenz [![Build Status](https://travis-ci.org/openHPI/jenz.svg?branch=master)](https://travis-ci.org/openHPI/jenz)
## Documentation
Further documentation, especially about the components, can be found in the [Wiki](https://github.com/openHPI/jenz/wiki).

## First setup
[Node.js](https://nodejs.org/en/download/) and npm (included with node) are needed to run this project.
1. `cd jenz`
2. Run `npm install`
3. (optionally) if you get an error using windows, run: npm set registry https://registry.npmjs.org/
4. Run `npm install -g @angular/cli`
5. Copy file materialize.js from the root directory of this git into `jenz/node_modules/materialize-css/dist/js`
5. Run `npm start`

## Errors/ Warnings

When you run `npm install` there may occur one error regarding the canvas. The canvas is used for the qr-code-generator component. It´s an optional dependency, which we DON´T use. So we can ignore this error message. You can browse this link https://github.com/SuperiorJT/angular2-qrcode to get more details about this.

There are some further warning regarding optional dependencies. Feel free to ignore them as well.

Q: "Oh my god, the course component does weird things and skipps multiple courses at once"
A: "You forgot you replace the Materialize.js - this should fix it."

## Development
Once you have installed the dependencies, you can start a development server by running `npm start`.

## Deploy to production
Deployment is done in two phases: You need to build locally first, as building on Travis currently fails (see #18). Once building is done and succeeded you simply need to push it to the master branch ob Github.
Deployment will then be triggered by Travis automatically.

### Build locally
Simply run `npm run build-deploy`. This will set an environment variable and will trigger the Angular CLI build.

##### Troubleshooting the build
It might be possible that the build fails. This can either be due to an error with the cross-platform environemnt variable setting or because the code contains error.
In the prior case, set the environment variable manually (`NODE_ENV=production`) and build by hand: `ng build --prod --base-href https://openhpi.github.io/jenz/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
