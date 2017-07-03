import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit{
  courses: Course [];

  constructor(private courseService: DataService) {}

  ngOnInit(): void {
  	this.courseService.getAll('https://open.hpi.de/api/v2/courses')
  	                  .subscribe(courses => this.courses = courses as Course[]);
  }
}
