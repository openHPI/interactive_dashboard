import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { MaterializeModule } from 'angular2-materialize';
 import { NguiMapModule} from '@ngui/map';

import { AppComponent } from './app.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PromoNumbersComponent } from './promo-numbers/promo-numbers.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoursesComponent } from './courses/courses.component';

import { CourseService } from './courses/course.service';
import { ReviewCardComponent } from './review-card/review-card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChart,
    KeyFeaturesComponent,
    TestimonialsComponent,
    PromoNumbersComponent,
    ReviewsComponent,
    WorldMapComponent,
    StatisticsComponent,
    CoursesComponent,
    ReviewCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	MaterializeModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCQLhnDxhB2Gb7CRWLlZvWcYdEqK0GqseI'})
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
