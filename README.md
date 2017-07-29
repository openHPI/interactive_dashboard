# Jenz [![Build Status](https://travis-ci.org/openHPI/jenz.svg?branch=master)](https://travis-ci.org/openHPI/jenz)
## First setup
[Node.js](https://nodejs.org/en/download/) and npm (included with node) are needed to run this project.
1. `cd jenz`
2. Run `npm install`
3. (optionally) if you get an error using windows, run: npm set registry https://registry.npmjs.org/
4. Run `npm install -g @angular/cli`
5. Copy file materialize.js from the root directory of this git into jenz/node_modules/materialize-css/dist/js
5. Run `npm start`

## Errors/ Warnings

When you run `npm install´ there may occur one error regarding the canvas. The canvas is used for the qr-code-generator component. It´s an optional dependency, which we DON´T use. So we can ignore this error message. You can browse this link https://github.com/SuperiorJT/angular2-qrcode to get more details about this.

There are some further warning regarding optional dependencies. Feel free to ignore them as well.

## Overall Architecture

Die verwendeted Datentypen sind in der dashboard.ts (eigene Datentypen) und api.ts (API-Json-Mapping)

### DataService
Ein Service, der für das Laden der ausgewählten Daten verantwortlich ist. Bei einer Veränderten Selektion der Plattformen, fordert er jede registrierte Komponente auf, sich zu updaten - also die neuen Daten vom DataService zu holen. Des Weiteren ist der DataService für das Starten und Stoppen der Animationen verantwortlich. Dazu müssen sich die Komponenten vorher beim DataService entsprechend registriert haben. Die Animationen werden bei Inaktivität des Nutzers gestartet.

### Filter
Der Filter besteht aus mehreren Filter-Logo - Komponenten - eine für jede Plattform. Jede Filter-Logo Komponente ist anklickbar und verändert die momentane Selektierung der Daten im DataService. Es können immer nur eine, oder alle Plattformen ausgewählt werden.

### World-Map
Eine Google-Maps Komponente zum Anzeigen der Besucher der letzten 24h. Die Auswahl des Zeitfensters ist mittels noUI-Slider Komponente möglich, welche auch das Verschieben eines ausgewählten Zeitfensters ermöglicht. Die Besucher werden geclustert in der Karte angezeigt.
Des Weiteren wird die Karte in einem dunklen Theme gestyled. Außerdem ist der Zoom eingeschränkt, sowie die Steuerungsinstrumente ausgeblendet.

### Promo-Numbers
Besteht aus 4 Promo-numbers-Komponenten: Enrollments, Users, Courses, Certificates - Es wird die counto-Komponente verwendet, um die Veränderung der Zahlen zu animieren. Die Zahlen werden aus der GlobalStatistics-Route ausgelesen.

### Key-Features
Zeigt Informationen zu den Vorteilen von MOOC´s allgemein an. Wird nur angezeigt, wenn alle Plattformen ausgewählt sind.

### Citations
Wird alternativ zu den Key-Features angezeigt. Wird nur eine Plattform ausgewählt, so wird ein repräsentatives Zitat dieser angezeigt.

### Courses
Besteht aus einem Carousel von Course-Cards. Zeigt die aktuellen und angekündigten Kurse der ausgewählten Plattformen an.

### Course-Card
Eine Karte, die zu einem Kurs das Bild, den Titel, die Authoren sowie einen Anrisstext anzeigt. Beim Klick auf diese wird ein QR-Code zur Kursseite angezeigt.

### Reviews
Ein Slider, der Recommodations von Nutzern u.ä. je nach ausgewählter Plattform anzeigt.

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
