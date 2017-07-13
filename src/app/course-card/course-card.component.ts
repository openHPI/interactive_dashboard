import { Component, Input, OnInit } from '@angular/core';
import { Course, CourseStatistics } from '../api';
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
