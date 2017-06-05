import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
 import { NguiMapModule} from '@ngui/map';

import { AppComponent } from './app.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { PromoNumbersComponent } from './promo-numbers/promo-numbers.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WorldMapComponent } from './world-map/world-map.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyFeaturesComponent,
    TestimonialsComponent,
    FeatureCardComponent,
    PromoNumbersComponent,
    ReviewsComponent,
    WorldMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  MaterializeModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCQLhnDxhB2Gb7CRWLlZvWcYdEqK0GqseI'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
