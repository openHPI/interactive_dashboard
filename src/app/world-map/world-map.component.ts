import { Component } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Platform } from '../dashboard';

import limitMap from 'google-map-bounds-limit';
declare var google: any;

@Component({
  selector: 'world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})


export class WorldMapComponent {
  
  primaryColor: string;
  userPositions = [];
  currentHour = new Date().getHours();
  rangeValues = [this.currentHour-2, this.currentHour];
  lastRangeValues = [];
  rangeConfig: any = {
  behaviour: 'drag',
  animate: true,
  connect: true,
  step: 0.5,
  margin: 0.5, // min space between sliders
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
    this.dataService.addAnimationListener(this);
  }

  private callApisAndSetMarkers(startDate: Date, endDate: Date){
    this.dataService.getWorldPositions(startDate, endDate).subscribe(platformAndPositions => {
        let platforms: Platform[] = platformAndPositions[0] as Platform[];
        let geoArrays = platformAndPositions.slice(1, platformAndPositions.length);
		let markers = [];
        for (var i = 0; i < platforms.length; i++) {
            for (var j = 0; j < geoArrays[i].length; j++) {
			  markers.push([geoArrays[i][j].lat, geoArrays[i][j].lon, platforms[i].mapMarkerUrl]);
			}
		}
		this.userPositions = markers;
        this.dataService.updateCompleted();
    });
  }
  
  public update(): void {
	this.handleChangedRange();
    this.primaryColor = this.dataService.getPrimaryColor();
  }
  
  public onMapReady(googleMap): void {
	let maxBounds = new google.maps.LatLngBounds(
	  new google.maps.LatLng(-85, -175),
	  new google.maps.LatLng(85, 175)
	);
	limitMap(googleMap, maxBounds);
  }

  public nextAnimationStep(): void {
      if(this.rangeValues[1] < new Date().getHours()){
          this.rangeValues = [this.rangeValues[0]+1, this.rangeValues[1]+1]; //hop one hour forward
      }
      else{
          this.rangeValues = [0,2];
      }
  }

  public onChange(event): void {
	if (!this.equalArrays(this.lastRangeValues, this.rangeValues)){
	  this.lastRangeValues = this.rangeValues;
	  this.handleChangedRange();	
	}
  }

  private handleChangedRange() {
    let startDate = new Date();
    let endDate = new Date();
    startDate.setUTCHours(this.rangeValues[0], this.getMinutes(this.rangeValues[0]), 0, 0);
    endDate.setUTCHours(this.rangeValues[1], this.getMinutes(this.rangeValues[1]), 0, 0);
    this.callApisAndSetMarkers(startDate, endDate);
  }

  private equalArrays(arrayA, arrayB): boolean {
	return (arrayA.length == arrayB.length) && arrayA.every(function(element, index) { return element === arrayB[index]; });
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
