import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
public value: Number;
  constructor() { }

  ngOnInit(): void {
  }
  getSliderValue(event) {
 }
}
