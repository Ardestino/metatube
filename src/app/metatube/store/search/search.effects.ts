import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of, pipe } from "rxjs";
import { map, filter, catchError, tap, mergeMap, switchMap } from 'rxjs/operators';

import * as SearchActions from "./search.actions";
import { YoutubeService } from '../../../../api/index';

@Injectable()
export class SearchEffects {

  search$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(SearchActions.iniciarBusqueda),
        mergeMap(({search_term}) =>
          this.api.youtubeChannelSearchCreate(search_term).pipe(
            map(data => SearchActions.busquedaExitosa(data)),
            catchError(error => of(SearchActions.busquedaErronea({ error }))))
          ),
    );
  });


  constructor(
    private actions$ : Actions,
    private api: YoutubeService) {}



}

