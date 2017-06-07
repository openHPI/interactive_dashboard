import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public area_ChartData = [
        ['Month', 'openHPI', 'openSAP', 'openWHO', 'moocHouse'],
        ['January', 9000, 5000, 150, 900],
        ['February', 12000, 6000, 170, 5000],
        ['March', 13000, 10000, 200, 9000],
        ['April', 13500, 10000, 250, 9000],
        ['May', 18000, 14000, 350, 13000],
        ['June', 25000, 17000, 250, 14000]
    ];

    public area_ChartOptions = {
        hAxis: { title: '', titleTextStyle: { color: '#333' }, gridlines: {color: 'transparent'} },
        vAxis: { minValue: 0, gridlines: {color: 'transparent'}},
        chartArea:{width:'90%', height:'80%'},
        backgroundColor: 'transparent',
        legend: {position: 'top', alignment: 'center'},
        areaOpacity: 1,
        colors:[ '#f57c00', '#0d47a1', '#1e88e5', '#388e3c' ],
        animation: {duration: 300, startup: true},
        fontName: 'Calibri'

    };
  constructor() { }

  ngOnInit() {
  }

}
