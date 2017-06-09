import { Course } from './course';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CourseService {

  //private courseFeedURL: string = 'http://open.hpi.de/feeds/courses';
  private courseFeedURL: string = 'assets/courses/courses.json';

  constructor(private http: Http) {}
  
  getAllCourses(): Promise<Course[]> {
    return this.http.get(this.courseFeedURL)
      .toPromise()
      .then(response => response.json().courses as Course[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}