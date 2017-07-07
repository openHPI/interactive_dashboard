import { Component, EventEmitter, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Review } from '../review';
import { REVIEWS } from 'assets/reviews/reviews';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent {

  @ViewChildren('item') items: QueryList<any>;
  @ViewChild('prev') prev: any;
  @ViewChild('next') next: any;
  
  reviews: Review[] = REVIEWS;
  
  navigatorActions = new EventEmitter<string|MaterializeAction>();

  previousReview(): void {
	if (this.getActiveItem() != this.items.first){
		this.navigatorActions.emit({action:"carousel", params:['prev']});
	}
  }
  nextReview(): void {
    this.navigatorActions.emit({action:"carousel", params:['next']});
  }
  
  getActiveItem(){
	return this.items.find(this.findActiveItem);
  }
  
  findActiveItem(item){
	return item.nativeElement.classList.contains('active');
  }  
  
  isFirst(): Boolean {
	return this.items ? this.getActiveItem() == this.items.first : false;
  }
  
  isLast(): Boolean {
	return this.items ? this.getActiveItem() == this.items.last : false;
  }
}

