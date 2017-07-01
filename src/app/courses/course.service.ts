import { Course } from './course';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CourseService {

  private courseFeedURL: string = 'https://open.hpi.de/api/v2/courses';
  //private courseFeedURL: string = 'assets/courses/courses.json';

  constructor(private http: Http) {}
  
  getAllCourses(): Observable<Course[]> {
    return this.http.get(this.courseFeedURL)
      .map(this.extractData);
  }
  
  private extractData(response: Response) {
    let json = response.json();
    return json.data || { };
  }
  
}