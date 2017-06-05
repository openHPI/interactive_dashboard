import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { PromoNumbersComponent } from './promo-numbers/promo-numbers.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyFeaturesComponent,
    TestimonialsComponent,
    FeatureCardComponent,
    PromoNumbersComponent,
    ReviewsComponent,
    CoursesComponent
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
