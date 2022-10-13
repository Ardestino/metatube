import { createReducer, on } from "@ngrx/store";
import { Proyecto } from "src/api/index";
import * as proyectosActions  from "./proyectos.actions";

export interface ProyectosState{
  cargando : boolean,
  proyectos : Proyecto[],
  proyecto_seleccionado : Proyecto
}

export const initialState :ProyectosState = {
  cargando : false,
  proyectos : [],
  proyecto_seleccionado : null
}

export const proyectosReducer = createReducer(
  initialState,
  on(proyectosActions.loadProyectos, state => ({ ...state, cargando: true })),
);
