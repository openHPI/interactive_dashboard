import { Component, Input } from '@angular/core';
import { Course } from '../api';
import { Config } from '../dashboard';

import { CONFIG } from 'assets/config/config';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  public _course: Course;
  public config: Config = CONFIG;
  public qrCodeUrl: string;
	
  @Input()
  set course(course: Course) {
	this._course = course;
	//hacky way to build up the qrCodeUrl
	this.qrCodeUrl = this.getHost(this._course.attributes.image_url) + this.config.directCourseUrl + this._course.attributes.slug;
  }
  
  private getHost(url: string): string {
	let location = document.createElement('a');
    location.href = url;
    return location.hostname;
  }
  
}
