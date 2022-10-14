import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of, pipe } from "rxjs";
import { map, filter, catchError, tap, mergeMap, switchMap } from 'rxjs/operators';

import * as ProyectosActions from "./proyectos.actions";
import { ApiService } from '../../../../api/index';

@Injectable()
export class ProyectosEffects {

  constructor(
    private actions$ : Actions,
    private api: ApiService) {}

}
