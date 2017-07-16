import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { MaterializeModule } from 'angular2-materialize';
import { NguiMapModule} from '@ngui/map';
import { CountoModule }  from 'angular2-counto';

import { AppComponent } from './app.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { PromoNumbersComponent } from './promo-numbers/promo-numbers.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoursesComponent } from './courses/courses.component';

import { DataService } from './services/data-service.service';
import { ReviewCardComponent } from './review-card/review-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { FilterComponent } from './filter/filter.component';
import { FilterLogoComponent } from './filter-logo/filter-logo.component';
import { PromoNumbersComponentComponent } from './promo-numbers-component/promo-numbers-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChart,
    KeyFeaturesComponent,
    PromoNumbersComponent,
    ReviewsComponent,
    WorldMapComponent,
    StatisticsComponent,
    CoursesComponent,
    ReviewCardComponent,
    CourseCardComponent,
    FilterComponent,
    FilterLogoComponent,
    PromoNumbersComponentComponent
  ],
  imports: [
    BrowserModule,
	CountoModule,
    FormsModule,
    HttpModule,
	  MaterializeModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCQLhnDxhB2Gb7CRWLlZvWcYdEqK0GqseI'})
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
