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
  selector: 'app-grafica-presion',
  templateUrl: './grafica-presion.component.html',
  styleUrls: ['./grafica-presion.component.css']
})


export class GraficaPresionComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions:Partial<ChartOptions> | any;
 
  constructor(){
   this.chartOptions = {
       series: [
         {
           name: "Presión",
           data: [10, 41, 35, 300, 49, 62, 69, 91, 200]
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
         text: "Presión",
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
 