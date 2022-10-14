import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "src/app/metatube/store";
import { Proyecto } from "src/api";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  proyecto$ : Observable<Proyecto>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.proyecto$ = this.store.select(state => state.proyectos.proyecto_seleccionado);
  }

}
