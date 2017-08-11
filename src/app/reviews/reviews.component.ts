import { Component, EventEmitter, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Review } from '../dashboard';
import { MaterializeAction } from 'angular2-materialize';
import { Observable, Subscription } from 'rxjs/Rx';

declare var $: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})

export class ReviewsComponent {

  @ViewChildren('item') items: QueryList<any>;
  @ViewChild('prev') prev: any;
  @ViewChild('next') next: any;
  @ViewChild('slider') slider;

  public reviews: Review[];
  public leftArrowUrl: string = 'assets/arrows/left-arrow.png';
  public rightArrowUrl: string = 'assets/arrows/right-arrow.png';

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

  public previousReview(): void {
	//if (this.getActiveItem() != this.items.first){
		this.navigatorActions.emit({action:'carousel', params:['prev']});
	//}
  }
  public nextReview(): void {
	//if (this.getActiveItem() != this.items.last) {
	    this.navigatorActions.emit({action:'carousel', params:['next']});
	//}
  }

  private reloadSlider(): void {
	if(!this.slider) return;
    //workaround proposed by Rubyboy (a Materialize guy)
	let jSlider = $(this.slider.nativeElement);
	jSlider.find('.indicators').detach();
	jSlider.removeClass("initialized");
	this.navigatorActions.emit({action:'carousel', params:[{fullWidth: true, noWrap: false}]});
	this.subscription.unsubscribe();
	this.reviewService.updateCompleted();
  }

  private getActiveItem(){
	return this.items.find(this.findActiveItem);
  }

  private findActiveItem(item){
	return item.nativeElement.classList.contains('active');
  }

  public isFirst(): Boolean {
	//return this.items ? this.getActiveItem() == this.items.first : false;
	return false;
  }

  public isLast(): Boolean {
	//return this.items ? this.getActiveItem() == this.items.last : false;
	return false;
  }
}

