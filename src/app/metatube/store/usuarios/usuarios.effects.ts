import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { EMPTY, Observable, of, pipe } from "rxjs";
import { map, filter, catchError, tap, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';

import * as UsuariosActions from "./usuarios.actions";
import { ProyectosService } from '../../../../api/index';
import { Action, Store } from "@ngrx/store";
import { AppState } from "..";

@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$ : Actions,
    private proyectosApi: ProyectosService,
    private store : Store<AppState>) {}

}
