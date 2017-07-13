import { Component, EventEmitter, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Review } from '../dashboard';
import { MaterializeAction } from 'angular2-materialize';
import { Observable, Subscription } from 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent {

  @ViewChildren('item') items: QueryList<any>;
  @ViewChild('prev') prev: any;
  @ViewChild('next') next: any;
  @ViewChild('slider') slider; 
  
  private reviews: Review[];
  
  //workaround
  private subscription: Subscription;
  
  public constructor(private reviewService: DataService) {
	this.reviewService.addUpdateListener(this);
  }
  
  //Service-methods
  public update(): void {
	this.reviews = this.reviewService.getReviews();
	let timer = Observable.timer(0, 2000);
    this.subscription = timer.subscribe(() => this.reloadSlider()); //ugly but works
  }
  
  //Component-methods
  private navigatorActions = new EventEmitter<string|MaterializeAction>();

  private previousReview(): void {
	if (this.getActiveItem() != this.items.first){
		this.navigatorActions.emit({action:'carousel', params:['prev']});
	}
  }
  private nextReview(): void {
	if (this.getActiveItem() != this.items.last) {
	    this.navigatorActions.emit({action:'carousel', params:['next']});
	}
  }
  
  private reloadSlider(): void {
	if(!this.slider) return;
    //workaround proposed by Rubyboy (a Materialize guy)
	let jSlider = $(this.slider.nativeElement);
	jSlider.find('.indicators').detach();
	jSlider.removeClass("initialized");
	this.navigatorActions.emit({action:'carousel', params:[{fullWidth: true, noWrap: true}]});
	this.subscription.unsubscribe();
  }
  
  private getActiveItem(){
	return this.items.find(this.findActiveItem);
  }
  
  private findActiveItem(item){
	return item.nativeElement.classList.contains('active');
  }  
  
  private isFirst(): Boolean {
	return this.items ? this.getActiveItem() == this.items.first : false;
  }
  
  private isLast(): Boolean {
	return this.items ? this.getActiveItem() == this.items.last : false;
  }
}

