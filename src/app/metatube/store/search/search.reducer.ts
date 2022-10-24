import { createReducer, on } from "@ngrx/store";
import * as searchActions  from "./search.actions";

export interface SearchState{
  visible : boolean
}

export const initialState : SearchState = {
  visible : false
}

export const searchReducer = createReducer(
  initialState,
  on(searchActions.mostrarBuscador, state => ({ ...state, visible: true })),
  on(searchActions.ocultarBuscador, state => ({ ...state, visible: false })),
);
