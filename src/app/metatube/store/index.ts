import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterState } from "./counter/counter.reducers";
import { proyectosReducer, ProyectosState } from "./proyectos/proyectos.reducer";
import { ProyectosEffects } from "./proyectos/proyectos.effects";


export const metaFeatureKey = 'meta';

export const AppEffects = [
  ProyectosEffects
];

export interface AppState{
  counter : CounterState,
  proyectos : ProyectosState
}

export const reducers = {
  count: counterReducer,
  proyectos: proyectosReducer
};

export const metaReducer: ActionReducerMap<AppState> = {
   counter: counterReducer,
   proyectos: proyectosReducer
}
