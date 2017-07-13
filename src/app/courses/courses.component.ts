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
  
  //animation stuff
  autoSlideSubscription: Subscription;
  autoSlideIntervalInSeconds: number = 5;
  
  //workaround
  subscription: Subscription;
  
  constructor(private courseService: DataService) {
	this.courseService.addUpdateListener(this);
  }
  
  public update(): void{
	this.courseService.getCourses().subscribe(courses => {
		this.courses = courses.reduce(function(prev, next) {
			return prev.concat(next);
		});
		let timer = Observable.timer(0, 2000);
		this.subscription = timer.subscribe(() => this.reloadCarousel()); //ugly but works
	});
  }
  
  private reloadCarousel(): void {
	if(!this.carousel) return;
    //workaround proposed by Rubyboy (a Materialize guy)
	let jCarousel = $(this.carousel.nativeElement);
	jCarousel.removeClass("initialized");
	//we need to unregister the event handlers, but we cant - jquery off() doesnt work
	this.navigatorActions.emit({action:'carousel', params:['']});
	this.subscription.unsubscribe();
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
