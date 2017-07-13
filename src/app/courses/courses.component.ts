import { Component, EventEmitter } from '@angular/core';
import { Course } from '../api';
import { DataService } from '../services/data-service.service';
import { MaterializeAction } from 'angular2-materialize';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  
  courses: Course [];
  autoSlideSubscription: Subscription;
  autoSlideIntervalInSeconds: number = 5;
  navigatorActions = new EventEmitter<string|MaterializeAction>();
  
  constructor(private courseService: DataService) {
	this.courseService.addUpdateListener(this);
  }
  
  public update(): void{
	this.courseService.getCourses().subscribe(courses =>
		this.courses = courses.reduce(function(prev, next) {
			return prev.concat(next);
		}));
  }
  
  public startAutoSlideTimer(): void {
    let timer = Observable.timer(0, this.autoSlideIntervalInSeconds * 1000);
	//wait arg1, then repeat all arg2 times
    this.autoSlideSubscription = timer.subscribe(() => this.showNextCourse());
  }
  
  public stopAutoSlideTimer(): void {
	if (this.autoSlideSubscription) 
		this.autoSlideSubscription.unsubscribe();
  }
  
  private showNextCourse(): void {
    this.navigatorActions.emit({action:"carousel", params:['next']});
  }
  
}
