import { Component, EventEmitter, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Review } from '../review';
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

  reviews: Review[] = [
	{statement: '120 Schüler waren beim openHPI-Programmierkurs auch in ihrer Freizeit mit viel Engagement und großem Interesse bei der Sache.', imageUrl: '../assets/testimonials/square_dominik.jpg', author: 'Dominik Hausner, Informatik-Lehrer'},
	{statement: 'Prof. Meinel begeisterte mich für das Thema Web-Technologien.', imageUrl: '../assets/testimonials/square_elisabeth.jpg', author: 'Elisabeth Jass (Jahrgang 1934), openHPI Nutzerin'},
	{statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
	{statement: 'openHPI offers a variety of interesting courses. Video indexation or collaboration spaces make it easier to follow and learn.', imageUrl: '../assets/testimonials/square_oriol.jpg', author: 'Oriol Borras Gene, Ph.D. Student - Technical University of Madrid'},
	{statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
  ];
  
  
  navigatorActions = new EventEmitter<string|MaterializeAction>();

  previousCourse() {
	if (this.getActiveItem() != this.items.first){
		this.navigatorActions.emit({action:"carousel", params:['prev']});
	}
  }
  nextCourse() {
    this.navigatorActions.emit({action:"carousel", params:['next']});
  }
  
  getActiveItem(){
	return this.items.find(this.findActiveItem);
  }
  
  findActiveItem(item){
	return item.nativeElement.classList.contains('active');
  }  
  
  isFirst(){
	return this.items ? this.getActiveItem() == this.items.first : false;
  }
  
  isLast(){
	return this.items ? this.getActiveItem() == this.items.last : false;
  }
}

