import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    KeyFeaturesComponent,
    FeatureCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyCQLhnDxhB2Gb7CRWLlZvWcYdEqK0GqseI'
	})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
