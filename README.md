# Jenz

## First setup
[Node.js](https://nodejs.org/en/download/) and npm (included with node) are needed to run this project.
1. `cd jenz`
2. Run `npm install`
2.1 (optionally) if you get an error using windows, run: npm set registry https://registry.npmjs.org/
3. Run `npm install -g @angular/cli`
4. Run `npm start`

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
 this.myService.getAll('https://funny-url.com/api/getCourses')
                 .subscribe(courses => this.courses = courses as Course[]);
 ```

## How to deploy to production
Do `npm run deploy` and hope that all works well. :-)
---

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
