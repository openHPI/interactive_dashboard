import { Component } from '@angular/core';
import { DataService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent {
  
  
  public constructor(public dataService: DataService) { }
  
  
}
