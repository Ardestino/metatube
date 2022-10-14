import { createReducer, on } from "@ngrx/store";
import { Proyecto } from "src/api/index";
import * as proyectosActions  from "./proyectos.actions";

export interface ProyectosState{
  cargando : boolean,
  error : boolean,
  proyectos : Proyecto[],
  proyecto_seleccionado : Proyecto
}

export const initialState :ProyectosState = {
  cargando : false,
  error : false,
  proyectos : [],
  proyecto_seleccionado : null
}

export const proyectosReducer = createReducer(
  initialState,
  on(proyectosActions.cargarProyectos, state => ({ ...state, cargando: true })),
  on(proyectosActions.cargarProyectosSuccess, (state,{proyectos}) => {
    return { ...state, cargando: false, proyectos }
  }),
  on(proyectosActions.cargarProyectosFailure, state => ({ ...state, error: true })),
);
