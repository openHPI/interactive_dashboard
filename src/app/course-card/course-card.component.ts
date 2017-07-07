import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseStatistics } from '../course-statistics';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;

  courseStatistics: CourseStatistics;
  
  constructor(private courseStatisticService: DataService) { }

  ngOnInit() {
	//load courseStatistics from DataService
  }

}
