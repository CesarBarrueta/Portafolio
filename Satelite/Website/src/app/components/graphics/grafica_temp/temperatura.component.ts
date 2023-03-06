import { NumberFormatStyle } from "@angular/common";
import { Component, NgZone, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-temperatura",
  templateUrl: "./temperatura.component.html",
  styleUrls: ["./temperatura.component.css"]
})

export class TemperaturaComponent {
 @ViewChild("chart") chart!: ChartComponent;
 public chartOptions:Partial<ChartOptions> |any;

 constructor(){
  this.chartOptions = {
      series: [
        {
          name: "Temperatura",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 300]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Temperatura",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]
      }
    };
 }
 

}

