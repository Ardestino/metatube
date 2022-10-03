import { Component, OnInit, Input } from '@angular/core';
import { Observable, observable } from 'rxjs';
import charts from '../../../../@youpez/data/charts'
import { Proyecto } from "src/api/index";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() proyecto : Observable<Proyecto>;

  public charts = charts;

  constructor() { }

  ngOnInit(): void {
  }

}
