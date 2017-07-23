# Jenz [![Build Status](https://travis-ci.org/openHPI/jenz.svg?branch=master)](https://travis-ci.org/openHPI/jenz)
## First setup
[Node.js](https://nodejs.org/en/download/) and npm (included with node) are needed to run this project.
1. `cd jenz`
2. Run `npm install`
3. (optionally) if you get an error using windows, run: npm set registry https://registry.npmjs.org/
4. Run `npm install -g @angular/cli`
5. Run `npm start`

## Development
Once you have installed the dependencies, you can start a development server by running `npm start`.

## Use the custom DataService
To use the DataService, do the following in your component:
1. **Import the DataService**:

 `import { DataService } from '../services/data-service.service';`

2. *(optional)* **Import your custom type**:

 e.g. `import { Course } from './course';`

3. **Declare your custom DataService (e.g. in constructor)**:

 `constructor(private myService: DataService) {}`

4. **Use the DataService**.

 e.g.
 ```
 this.courseService.getCourses().subscribe(courses => {
		this.courses = courses.reduce(function(prev, next) {
			return prev.concat(next);
		});
 });
 ```

## Deploy to production
Deployment is done in two phases: You need to build locally first, as building on Travis currently fails (see #18). Once building is done and succeeded you simply need to push it to the master branch ob Github.
Deployment will then be triggered by Travis automatically.

### Build locally
Simply run `npm run build-deploy`. This will set an environment variable and will trigger the Angular CLI build.

##### Troubleshooting the build
It might be possible that the build fails. This can either be due to an error with the cross-platform environemnt variable setting or because the code contains error.
In the prior case, set the environment variable manually (`NODE_ENV=production`) and build by hand: `ng build --prod --base-href 'https://openhpi.github.io/jenz/'`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
