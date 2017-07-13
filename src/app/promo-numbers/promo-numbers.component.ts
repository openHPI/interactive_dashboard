import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { GlobalStatistic } from '../api';
import { Observable, Subscription } from 'rxjs/Rx';

export class PromoNumber {
	count: number;
	title: string;
	description: string;
}

@Component({
  selector: 'app-promo-numbers',
  templateUrl: './promo-numbers.component.html',
  styleUrls: ['./promo-numbers.component.css']
})

export class PromoNumbersComponent {

  promoNumbers: PromoNumber[];

  public constructor(private numberService: DataService) {
	this.numberService.addUpdateListener(this);
  }
  
  public update(): void {
	let enrollments = 0;
	let users = 0;
	let courses = 0;
	let certificates = 0;
	this.numberService.getGlobalNumbers().subscribe(array => {
		array.forEach(element => {
		  let statistic: GlobalStatistic = element.global_statistic as GlobalStatistic;
		  enrollments += statistic.total_enrollments;
		  users += statistic.confirmed_users;
		});
		this.updatePromoNumbers(enrollments, users, courses, certificates);
	});
  }

  private updatePromoNumbers(enrollments: number, users: number, courses: number, certificates: number): void{
	this.promoNumbers = [
	  { count: enrollments, title: 'Enrollments', description: 'Total enrollments' },
	  { count: users, title: 'Users', description: 'Unique users' },
	  { count: courses, title: 'Courses', description: 'Available courses' },
	  { count: certificates, title: 'Certificates', description: 'Handed certificates' }
    ]
  }
  
 

}
