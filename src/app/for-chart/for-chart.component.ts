import { Component, OnInit } from '@angular/core';
import { AgChartOptions,AgCharts } from 'ag-grid-enterprise';

@Component({
  selector: 'app-for-chart',
  templateUrl: './for-chart.component.html',
  styleUrls: ['./for-chart.component.css']
})
export class ForChartComponent implements OnInit {

  public Charts_Op:AgChartOptions;

  constructor(){
    this.Charts_Op = {
      data:[
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
      ],
      series:[
        { type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }
      ]
    }
  }

  ngOnInit(): void {
      
  }
}
