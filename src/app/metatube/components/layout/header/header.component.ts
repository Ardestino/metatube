import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/metatube/store';
import { Router } from "@angular/router";
import { Proyecto } from 'src/api';
import { AuthService } from "src/app/auth/auth.service";
import * as ProyectosActions from "src/app/metatube/store/proyectos/proyectos.actions";
import * as SearchActions from "src/app/metatube/store/search/search.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  proyectos$: Observable<Proyecto[]>;
  loading$: Observable<boolean>;

  constructor(
    private auth: AuthService, // TODO: Cambiar servicio a effecto de autenticacion
    private router: Router, // TODO: Se podra mover el router a los actions?
    private store: Store<AppState>
    ){}

  ngOnInit(): void {
    this.loading$ = this.store.select(state => state.proyectos.cargando);
    this.proyectos$ = this.store.select(state => state.proyectos.proyectos);

    // Iniciar carga de protectos
    this.store.dispatch(ProyectosActions.cargarProyectos());
  }

  onItemClick(proyecto) {
    this.store.dispatch(ProyectosActions.seleccionaProyecto({proyecto: proyecto}))
  }

  onSearchClick(){
    this.store.dispatch(SearchActions.mostrarBuscador());
  }

  onLogOut(){
    //TODO: [Auth] Iniciar accion logout
    this.auth.LogOut();
    this.router.navigate(['/full/signin']);
  }

}




