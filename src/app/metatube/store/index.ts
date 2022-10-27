import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterState } from "./counter/counter.reducers";
import { proyectosReducer, ProyectosState } from "./proyectos/proyectos.reducer";
import { searchReducer, SearchState } from "./search/search.reducer";
import { ProyectosEffects } from "./proyectos/proyectos.effects";


export const metaFeatureKey = 'meta';

export const AppEffects = [
  ProyectosEffects
];

export interface AppState{
  counter : CounterState,
  proyectos : ProyectosState,
  search : SearchState
}

export const reducers = {
  count: counterReducer,
  proyectos: proyectosReducer,
  search: searchReducer
};

export const metaReducer: ActionReducerMap<AppState> = {
   counter: counterReducer,
   proyectos: proyectosReducer,
   search: searchReducer
}
