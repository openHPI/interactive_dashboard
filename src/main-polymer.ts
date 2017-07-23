import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

declare var require: any;

document.addEventListener('WebComponentsReady', () => {
    require('./main.ts');
});

// Ugly hack to convince Angular CLI that we call bootstrapModule somewhere
const hackThis = false;
if (hackThis) {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
