import { Component } from '@angular/core';

@Component({
  selector: 'jenz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openhpi: boolean;
  opensap: boolean;
  moochouse: boolean;
  openwho: boolean;

  constructor() {
    this.openhpi = true;
    this.opensap = true;
    this.moochouse = false;
    this.openwho = false;
  }

}
