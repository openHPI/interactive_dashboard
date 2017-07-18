import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor(public filterService: DataService) { }

}
