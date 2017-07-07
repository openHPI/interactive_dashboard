import { Component, EventEmitter, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../services/data-service.service';
import { MaterializeAction } from 'angular2-materialize';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit{
  
  courses: Course [];
  autoSlideSubscription: Subscription;
  autoSlideIntervalInSeconds: number = 5;
  untouchedCountdownInSeconds: number = 5;
  navigatorActions = new EventEmitter<string|MaterializeAction>();
  
  constructor(private courseService: DataService) {}

  ngOnInit(): void {
  	this.courseService.getAll('https://open.hpi.de/api/v2/courses')
  	                  .subscribe(courses => this.courses = courses as Course[]);
  }
  
  ngAfterViewInit(): void {
	this.startAutoSlideTimer();
  }
  
  startAutoSlideTimer(): void {
    let timer = Observable.timer(this.untouchedCountdownInSeconds * 1000, this.autoSlideIntervalInSeconds * 1000);
	//wait arg1, then repeat all arg2 times
    this.autoSlideSubscription = timer.subscribe(() => this.showNextCourse());
  }
  
  stopAutoSlideTimer(): void {
	this.autoSlideSubscription.unsubscribe();
  }
  
  showNextCourse(): void {
    this.navigatorActions.emit({action:"carousel", params:['next']});
  }
  
}
