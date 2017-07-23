import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { GlobalStatistic } from '../api';
import { PromoNumber } from '../dashboard';
import { Observable, Subscription } from 'rxjs/Rx';

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
      courses += statistic.courses_count;
      certificates += statistic.certificates_count;
    });
    //this.updatePromoNumbers(enrollments, users, courses, certificates);
    this.updatePromoNumbers(enrollments, users, 0, 0);
    this.numberService.updateCompleted();
  });
  }

  private updatePromoNumbers(enrollments: number, users: number, courses: number, certificates: number): void{
  let enrollmentsOld = 0;
  let usersOld = 0;
  let coursesOld = 0;
  let certificatesOld = 0;

  if (this.promoNumbers) {
    enrollmentsOld = this.promoNumbers[0].count;
    usersOld = this.promoNumbers[1].count;
    coursesOld = this.promoNumbers[2].count || 0;
    certificatesOld = this.promoNumbers[3].count || 0;
  }
  this.promoNumbers = [
    { count: enrollments, countOld: enrollmentsOld, title: 'Enrollments', description: 'Total enrollments' },
    { count: users, countOld: usersOld, title: 'Users', description: 'Unique users' },
    { count: courses, countOld: coursesOld, title: 'Courses', description: 'Available courses' },
    { count: certificates, countOld: certificatesOld, title: 'Certificates', description: 'Handed certificates' }
    ];
  }
}
