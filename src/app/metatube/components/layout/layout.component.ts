import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService, Proyecto } from "src/api/index";

@Component({
  selector: 'meta-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  proyectos : Observable<Proyecto[]>;
  projecto_seleccionado : Observable<Proyecto>;

  constructor(private api:ApiService) {
    this.proyectos = this.api.apiV1ProyectosList();
  }

  ngOnInit(): void {
    this.proyectos.subscribe( p => {
      this.projecto_seleccionado = of(p[0]);
    })
  }

}
