import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Platform } from '../dashboard';

@Component({
  selector: 'world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})


export class WorldMapComponent {
  userPositions = [];
  currentHour = new Date().getHours();

  mapOptions = {
	"center": "Potsdam, Germany",
	"zoom": 3,
	"mapTypeControl": false,
	"streetViewControl": false,
	"scaleControl": false,
	"zoomControl": false,
	"styles": [
		{
			"featureType": "all",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				},
				{
					"saturation": "-100"
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": 36
				},
				{
					"color": "#000000"
				},
				{
					"lightness": 40
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "off"
				},
				{
					"color": "#000000"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 17
				},
				{
					"weight": 1.2
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#4d6059"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#4d6059"
				}
			]
		},
		{
			"featureType": "landscape.natural",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#4d6059"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"lightness": 21
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#4d6059"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#4d6059"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#7f8d89"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#7f8d89"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#7f8d89"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#7f8d89"
				},
				{
					"lightness": 29
				},
				{
					"weight": 0.2
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 18
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#7f8d89"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#7f8d89"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#7f8d89"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#7f8d89"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 19
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
				{
					"color": "#2b3638"
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#2b3638"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#24282b"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#24282b"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		}
	]
  }

  constructor(private dataService: DataService) { 
	this.dataService.addUpdateListener(this);
  }

  callApis(startDate: Date, endDate: Date){
    this.dataService.getWorldPositions(startDate, endDate).subscribe(plattformAndPositions => {
		let platforms: Platform[] = plattformAndPositions[0] as Platform[];
		console.log(platforms); //do whatever you like and remove this line please
		let geoArrays = plattformAndPositions.slice(1, plattformAndPositions.length);
		this.pushPositions(geoArrays.reduce(function(prev, next) {
			return prev.concat(next);
		}))
	});
  }

  private pushPositions(jsonArray): void{
  	for (var i = jsonArray.length - 1; i >= 0; i--) {
  		this.userPositions.push([jsonArray[i].lat, jsonArray[i].lon]);
  	}
  }
  
  public update(): void {
	this.userPositions = [];
	let newDate = new Date();
	newDate.setMilliseconds(0);
	newDate.setMinutes(0);
	newDate.setSeconds(0);
	let startDate = new Date(newDate);
	let endDate = new Date(newDate);
	startDate.setHours(this.currentHour - 1);
	startDate.setMinutes(40);
	endDate.setHours(this.currentHour);
	console.log("start: "+ startDate +" end: "+ endDate);
	this.callApis(startDate, endDate);
  }

  private mapRangeChanged(rangeValue){
  	this.currentHour = rangeValue;	
	this.update();
  }
  
  private log(event, str) {
    if (event instanceof MouseEvent) {
    	return false;
    }

    console.log('event .... >', event, str);
  }

  
}
