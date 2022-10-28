import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of, pipe } from "rxjs";
import { map, filter, catchError, tap, mergeMap, switchMap } from 'rxjs/operators';

import * as ProyectosActions from "./proyectos.actions";
import { ProyectosService } from '../../../../api/index';

@Injectable()
export class ProyectosEffects {


  loadProyects$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ProyectosActions.cargarProyectos),
        mergeMap(() =>
          this.proyectosApi.proyectosList().pipe(
            map(data => ProyectosActions.cargarProyectosSuccess({ proyectos : data })),
            catchError(error => of(ProyectosActions.cargarProyectosFailure({ error }))))
          ),
    );
  });


  // // Iniciar carga de proyectos
  // this.api.proyectosList().subscribe(
  //   (proyectos) => {
  //     this.store.dispatch(ProyectosActions.cargarProyectosSuccess({ proyectos }));
  //     this.store.dispatch(ProyectosActions.seleccionaProyecto({proyecto: proyectos[0]}))
  //   },
  //   error => this.store.dispatch(ProyectosActions.cargarProyectosFailure(error))
  // );

  constructor(
    private actions$ : Actions,
    private proyectosApi: ProyectosService) {}

}
