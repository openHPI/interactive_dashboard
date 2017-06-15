import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  testVal = 1;
  public area_ChartData = [
        ['Month', 'openHPI', 'openSAP', 'openWHO', 'moocHouse'],
        ['January', (9000*this.testVal), 5000*(this.testVal), 150*(this.testVal), 900*(this.testVal)],
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
        animation: {duration: 30, startup: true},
        fontName: 'Calibri'

    };

  showVal(newVal){
    this.testVal = newVal;// this.area_ChartData[5][2].toString();// newVal;
    /*var newValue = 1000 - ((this.area_ChartData));
      this.area_ChartData.setValue(0, 1, newValue);
      drawChart();*/
      this.area_ChartData = [
        ['Month', 'openHPI', 'openSAP', 'openWHO', 'moocHouse'],
        ['January', (9000*this.testVal), 5000*(this.testVal), 150*(this.testVal), 900*(this.testVal)],
        ['February', 12000*this.testVal, 6000*this.testVal, 170, 5000],
        ['March', 13000*this.testVal, 10000*this.testVal, 200, 9000],
        ['April', 13500*this.testVal, 10000*this.testVal, 250, 9000],
        ['May', 18000*this.testVal, 14000*this.testVal, 350, 13000],
        ['June', 25000*this.testVal, 17000*this.testVal, 250*this.testVal, 14000]
    ];

  }
  constructor() { }

  ngOnInit() {
  }

}
