import { createReducer, on } from "@ngrx/store";
import { User } from "src/api/index";
import * as usuariosActions  from "./usuarios.actions";

export interface UsuariosState{
  usuario : any
}

export const initialState :UsuariosState = {
  usuario : {}
}

export const usuariosReducer = createReducer(
  initialState,
  on(usuariosActions.iniciarSesion, (state) => ({...state}))
);
