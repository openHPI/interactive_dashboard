import { Component, Input } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Platform } from '../../app/dashboard';

@Component({
  selector: 'app-filter-logo',
  templateUrl: './filter-logo.component.html',
  styleUrls: ['./filter-logo.component.css']
})
export class FilterLogoComponent {

  @Input() platform: Platform;

  constructor(private filterService: DataService) { }
}
