import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { NguiMapModule} from '@ngui/map';
+import { NouisliderModule } from 'ng2-nouislider';
import { CountoModule }  from 'angular2-counto';
import { QRCodeModule } from 'angular2-qrcode';

import { AppComponent } from './app.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { PromoNumbersComponent } from './promo-numbers/promo-numbers.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WorldMapComponent } from './world-map/world-map.component';
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
    KeyFeaturesComponent,
    PromoNumbersComponent,
    ReviewsComponent,
    WorldMapComponent,
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
    NouisliderModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCQLhnDxhB2Gb7CRWLlZvWcYdEqK0GqseI'}),
	  QRCodeModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
