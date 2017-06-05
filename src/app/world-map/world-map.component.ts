import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public log(event, str) {
    if (event instanceof MouseEvent) {
        return false;
    }
    console.log('event .... >', event, str);
  }
}
