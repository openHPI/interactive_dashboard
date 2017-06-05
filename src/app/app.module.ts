import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { PromoNumbersComponent } from './promo-numbers/promo-numbers.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChart,
    KeyFeaturesComponent,
    TestimonialsComponent,
    FeatureCardComponent,
    PromoNumbersComponent,
    ReviewsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
