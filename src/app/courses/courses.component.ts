import { Component } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent implements OnInit{

  courses: Course [];

  constructor(private courseService: CourseService) {}
  
  ngOnInit(): void {
	this.courseService.getAllCourses()
	  .then(courses => this.courses = courses);
  }
  
}
