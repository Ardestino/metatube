import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { EMPTY, Observable, of, pipe } from "rxjs";
import { map, filter, catchError, tap, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';

import * as ProyectosActions from "./proyectos.actions";
import { AIService, ChannelService, ProyectosService } from 'src/api/index';
import { Action, Store } from "@ngrx/store";
import { AppState } from "..";

@Injectable()
export class ProyectosEffects {


  loadProyects$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ProyectosActions.cargarProyectos),
        mergeMap(() =>
          this.proyectosApi.proyectosList().pipe(
            map(data => ProyectosActions.cargarProyectosSuccess({ proyectos : data.results })),
            catchError(error => of(ProyectosActions.cargarProyectosFailure({ error }))))
          ),
    );
  });

  selectProyect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ProyectosActions.cargarProyectosSuccess),
        withLatestFrom(this.store.select(state => state.proyectos)),
        map(([action, storeState]) => ProyectosActions.seleccionaProyecto({proyecto: storeState.proyectos[0]})));
  });

  loadChannel$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ProyectosActions.seleccionaProyecto),
        map(({proyecto}) => ProyectosActions.cargarCanal({canal : proyecto.canal})));
  });

  loadChannelSuccess$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ProyectosActions.cargarCanal),
        mergeMap(({canal}) =>
          this.channelsApi.channelRetrieve(canal).pipe(
            map(channel => ProyectosActions.cargarCanalSuccess({ canal : channel })),
            catchError(error => of(ProyectosActions.cargarCanalFailure({ error }))))
          ),
    );
  });

  loadGraphBestDay$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ProyectosActions.cargarCanalSuccess),
        mergeMap(({canal}) =>
          this.aiApi.aIMejorDiaPublicarCreate(canal.id).pipe(
            map(data => ProyectosActions.cargarGraficaBestDay({ data }))
          )))
    });

  createProyecto$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ProyectosActions.crearProyecto),
        mergeMap(({proyecto}) =>
          this.proyectosApi.proyectosCreate(proyecto).pipe(
            // TODO: Extraer informacion del canal
            // TODO: Extraer lista de videos
            // TODO: Extraer commentarios
            map(proyecto => ProyectosActions.crearProyectoSuccess({ proyecto })),
            catchError(error => of(ProyectosActions.crearProyectoFailure({ error }))))
          ),
    );
  });


  constructor(
    private actions$ : Actions,
    private proyectosApi: ProyectosService,
    private channelsApi: ChannelService,
    private aiApi : AIService,
    private store : Store<AppState>) {}

}
