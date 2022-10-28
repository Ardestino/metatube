import { createReducer, on } from "@ngrx/store";
import * as searchActions  from "./search.actions";

export interface ChannelSearchResult{
  channelId : string
  title : string
  description : string
  thumbnail : string
}

export interface SearchState{
  visible : boolean,
  search_result : ChannelSearchResult[],
  selected_result : ChannelSearchResult,
  loading : boolean
}

export const initialState : SearchState = {
  visible : false,
  search_result : [],
  selected_result : {
    channelId : '',
    title : '',
    description : '',
    thumbnail : ''
  },
  loading : false
}

export const searchReducer = createReducer(
  initialState,
  on(searchActions.mostrarBuscador, state => ({ ...state, visible: true })),
  on(searchActions.ocultarBuscador, state => ({ ...state, visible: false, search_term: '', search_result: [], })),
  on(searchActions.iniciarBusqueda, (state, {search_term}) => ({ ...state, loading: true, search_term: search_term })),
  on(searchActions.busquedaExitosa, (state, {results} ) => ({ ...state, loading: false, search_result: results})),
  on(searchActions.resultadoSeleccionado, (state,{selected}) => ({ ...state, selected_result: selected})),
  on(searchActions.busquedaErronea, state => ({ ...state, loading: false  })),
);
