import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterState } from "./counter/counter.reducers";
import { proyectosReducer, ProyectosState } from "./proyectos/proyectos.reducer";
import { searchReducer, SearchState } from "./search/search.reducer";
import { usuariosReducer, UsuariosState } from "./usuarios/usuarios.reducer";
import { ProyectosEffects } from "./proyectos/proyectos.effects";
import { SearchEffects } from "./search/search.effects";
import { UsuariosEffects } from "./usuarios/usuarios.effects";


export const metaFeatureKey = 'meta';

export const AppEffects = [
  ProyectosEffects,
  SearchEffects,
  UsuariosEffects
];

export interface AppState{
  counter : CounterState,
  proyectos : ProyectosState,
  search : SearchState,
  usuarios : UsuariosState
}

// FIXME: Comentado porque no se si afecta en algo
// export const reducers = {
//   count: counterReducer,
//   proyectos: proyectosReducer,
//   search: searchReducer,
//   usuarios: usuariosReducer
// };

export const metaReducer: ActionReducerMap<AppState> = {
   counter: counterReducer,
   proyectos: proyectosReducer,
   search: searchReducer,
   usuarios: usuariosReducer
}
