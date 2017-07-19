import { Component, HostListener } from '@angular/core';
import { DataService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent {
    
  public constructor(public dataService: DataService) { }
           
  @HostListener('touchstart', ['$event'])
  onTouchStart(event) { 
    this.dataService.recognizedUserInteraction();
  }  
  
  @HostListener('touchmove', ['$event'])
  onTouchMove(event) { 
    this.dataService.recognizedUserInteraction();
  }  
  
  @HostListener('touchend', ['$event'])
  onTouchEnd(event) { 
    this.dataService.recognizedUserInteraction();
  }  
  
  @HostListener('mousedown', ['$event'])
  onMouseDown(event) { 
    this.dataService.recognizedUserInteraction();
  }
  
  @HostListener('mousemove', ['$event'])
  onMouseMove(event) { 
    this.dataService.recognizedUserInteraction();
  }
  
  @HostListener('mouseup', ['$event'])
  onMouseUp(event) { 
    this.dataService.recognizedUserInteraction();
  }
  
  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) { 
    this.dataService.recognizedUserInteraction();
  }
  
}
