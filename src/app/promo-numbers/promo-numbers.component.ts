import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { ActiveUser, GlobalStatistic } from '../api';
import { PromoNumber } from '../dashboard';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-promo-numbers',
  templateUrl: './promo-numbers.component.html',
  styleUrls: ['./promo-numbers.component.css']
})

export class PromoNumbersComponent {

  promoNumbers: PromoNumber[];
  primaryColor: string;

  public constructor(private numberService: DataService) {
	this.numberService.addUpdateListener(this);
	this.initializePrivateUpdater();
  }

  private initializePrivateUpdater(): void {
    let timer = Observable.timer(0, 60000)
	timer.subscribe(() => this.updateNumbers(true));
  }
  
  private updateNumbers(isPrivateUpdate: boolean): void {
	let enrollments = 0;
	  let users = 0;
	  let courses = 0;
	  let certificates = 0;
	  let activeUsers = 0;
	  this.numberService.getGlobalNumbers().subscribe(array => {
		array.forEach(element => {
		  let statistic: GlobalStatistic = element.global_statistic as GlobalStatistic;
		  enrollments += statistic.total_enrollments;
		  users += statistic.confirmed_users;
		  courses += statistic.courses_count;
		  certificates += statistic.certificates_count;
		});
		this.numberService.getActiveUsers().subscribe(array => {
			array.forEach(element => {
				activeUsers += element.count;
			});
			this.updatePromoNumbers(enrollments, users, courses, certificates, activeUsers);
			if (isPrivateUpdate) {
				this.numberService.updateCompleted();
			}
		});
	  });
	  
  }
  
  public update(): void {
	this.primaryColor = this.numberService.getPrimaryColor();
	this.updateNumbers(false);
  }

  private updatePromoNumbers(enrollments: number, users: number, courses: number, certificates: number, activeUsers: number): void{
  let enrollmentsOld = 0;
  let usersOld = 0;
  let coursesOld = 0;
  let certificatesOld = 0;
  let activeUsersOld = 0;

  if (this.promoNumbers) {
    enrollmentsOld = this.promoNumbers[0].count;
    usersOld = this.promoNumbers[1].count;
    coursesOld = this.promoNumbers[2].count || 0;
    certificatesOld = this.promoNumbers[3].count || 0;
	activeUsersOld = this.promoNumbers[4].count || 0;
  }
  this.promoNumbers = [
    { count: enrollments, countOld: enrollmentsOld, title: 'Enrollments', description: 'Total enrollments' },
    { count: users, countOld: usersOld, title: 'Users', description: 'Unique users' },
    { count: courses, countOld: coursesOld, title: 'Courses', description: 'Available courses' },
    { count: certificates, countOld: certificatesOld, title: 'Certificates', description: 'Handed certificates' },
	{ count: activeUsers, countOld: activeUsersOld, title: 'Active users', description: 'Active users of the last 30 min' }
    ];
  }
}
