import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Course } from '../api';
import { DataService } from '../services/data-service.service';
import { MaterializeAction } from 'angular2-materialize';
import { Observable, Subscription } from 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  
  @ViewChild('carousel') carousel; 
  
  courses: Course [];
  navigatorActions = new EventEmitter<string|MaterializeAction>();
  primaryColor: string;
  
  //workaround
  subscription: Subscription;
  
  constructor(private courseService: DataService) {
	this.courseService.addUpdateListener(this);
	this.courseService.addAnimationListener(this);
  }
  
  public update(): void {
	this.courseService.getCourses().subscribe(courses => {
		this.courses = courses.reduce(function(prev, next) {
			return prev.concat(next);
		});
		this.courses = this.courses.filter(course => (course.attributes.status === 'announced' || course.attributes.status === 'active'));
		let timer = Observable.timer(0, 2000);
		this.subscription = timer.subscribe(() => this.reloadCarousel()); //ugly but works
	});
  this.primaryColor = this.courseService.getPrimaryColor();
  }
  
  public nextAnimationStep(): void {
    this.navigatorActions.emit({action:'carousel', params:['next']});
  }
  
  private reloadCarousel(): void {
	if (!this.carousel) return;
	$(this.carousel.nativeElement).removeClass('initialized');
	this.navigatorActions.emit({action: 'carousel', params:[{}]});
	this.subscription.unsubscribe();
	this.courseService.updateCompleted();
  }
  
  
  
}
