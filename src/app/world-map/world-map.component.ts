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
  rangeValues = [this.currentHour-2, this.currentHour];
  rangeConfig: any = {
  behaviour: 'drag',
  animate: true,
  connect: true,
  step: 0.5,
  limit: this.currentHour,
  margin: 0.5, //min space between sliders
  start: [this.currentHour-2, this.currentHour],
  range: {
    min: 0,
    max: 24
  	},
  pips: {
    mode: 'count',
    values: 25,
    density: 2, 
    stepped: true
  	}
  };

  mapOptions = {
	"center": "Potsdam, Germany",
	"zoom": 3,
	"mapTypeControl": false,
	"streetViewControl": false,
	"scaleControl": false,
	"zoomControl": false,
	"minZoom": 3,
	"maxZoom": 14,
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
	//set initial Map Markers
	this.handleChangedRange();
  }

  callApisAndSetMarkers(startDate: Date, endDate: Date){
	this.dataService.getWorldPositions(startDate, endDate).subscribe(plattformAndPositions => {
		let platforms: Platform[] = plattformAndPositions[0] as Platform[];
		console.log(platforms); //do whatever you like and remove this line please
		let geoArrays = plattformAndPositions.slice(1, plattformAndPositions.length);
		this.userPositions = [];
		for (var i = platforms.length - 1; i >= 0; i--) {
			this.pushPositions(geoArrays[i], platforms[i].mapMarkerUrl);
		}
		this.dataService.updateCompleted();
	});
  }

  private pushPositions(jsonArray, mapMarkerUrl): void{
  	for (var i = jsonArray.length - 1; i >= 0; i--) {
  		this.userPositions.push([jsonArray[i].lat, jsonArray[i].lon, mapMarkerUrl]);
  	}
  }
  
  public update(): void {
  	this.handleChangedRange();
  }
  
  public log(event, str) {
    if (event instanceof MouseEvent) {
    	return false;
    }

    console.log('event .... >', event, str);
  }

  private onChange(event){
  	console.log("RangeVals",this.rangeValues);
  	this.update();
  }

  private handleChangedRange(){
  	let startDate = new Date();
	let endDate = new Date();
	startDate.setUTCHours(this.rangeValues[0], this.getMinutes(this.rangeValues[0]), 0, 0);
	endDate.setUTCHours(this.rangeValues[1], this.getMinutes(this.rangeValues[1]), 0, 0);
	this.callApisAndSetMarkers(startDate, endDate);
  }

  private getMinutes(decimalNumber){
  	let afterDecimalPoint = decimalNumber.toString().split(".")[1];
	if(afterDecimalPoint){
		return afterDecimalPoint * 0.1 * 60;
	}
	else{
		return 0;
	}
  }
}
