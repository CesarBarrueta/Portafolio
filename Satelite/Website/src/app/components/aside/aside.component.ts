import { Component, OnInit } from '@angular/core';

interface Port {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foods: Port[] = [
    {value: 'COM3', viewValue: 'COM3'},
    {value: 'COM4', viewValue: 'COM4'},
    {value: 'COM5', viewValue: 'COM5'},
    {value: 'COM6', viewValue: 'COM6'},
    {value: 'COM7', viewValue: 'COM7'},
  ];

}
