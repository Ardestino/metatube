import { Component, OnInit } from '@angular/core';
import charts from '../../../../@youpez/data/charts'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public charts = charts;

  constructor() { }

  ngOnInit(): void {
  }

}
