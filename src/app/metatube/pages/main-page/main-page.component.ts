import { Component, OnInit } from '@angular/core';
import charts from '../../../../@youpez/data/charts'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public charts = charts;

  constructor() { }

  ngOnInit(): void {
  }

}
