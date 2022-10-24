import {Component, EventEmitter, OnInit, Output, Input, OnDestroy} from '@angular/core'
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService, Proyecto } from 'src/api';
import { AuthService } from "src/app/auth/auth.service";
import { AppState } from 'src/app/metatube/store';
import * as ProyectosActions from "src/app/metatube/store/proyectos/proyectos.actions";
import * as SearchActions from "src/app/metatube/store/search/search.actions";

@Component({
  selector: 'app-layout-mini-sidebar',
  templateUrl: './layout-mini-sidebar.component.html',
  styleUrls: ['./layout-mini-sidebar.component.scss']
})
export class LayoutMiniSidebarComponent implements OnInit, OnDestroy {

  proyectos$: Observable<Proyecto[]>;
  loading$: Observable<boolean>;

  constructor(
    private api: ApiService, // TODO: Refactorizar a un effect
    private auth: AuthService, // TODO: Cambiar servicio a effecto de autenticacion
    private router: Router, // TODO: Se podra mover el router a los actions?
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(state => state.proyectos.cargando);
    this.proyectos$ = this.store.select(state => state.proyectos.proyectos);

    // Iniciar carga de protectos
    this.store.dispatch(ProyectosActions.cargarProyectos());

    // Iniciar carga de proyectos
    this.api.apiV1ProyectosList().subscribe(
      (proyectos) => {
        this.store.dispatch(ProyectosActions.cargarProyectosSuccess({ proyectos }));
        this.store.dispatch(ProyectosActions.seleccionaProyecto({proyecto: proyectos[0]}))
      },
      error => this.store.dispatch(ProyectosActions.cargarProyectosFailure(error))
    );
  }

  ngOnDestroy(): void {
    // TODO: desuscribir de los observables
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
