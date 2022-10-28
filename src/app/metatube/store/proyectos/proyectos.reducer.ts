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
  proyecto_seleccionado : {id:-1,nombre:"no seleccionado", url:"/", canal:'', usuario:0}
}

export const proyectosReducer = createReducer(
  initialState,
  on(proyectosActions.cargarProyectos, (state) => ({
    ...state,
    cargando: true,
  })),
  on(proyectosActions.cargarProyectosSuccess, (state, { proyectos }) => {
    return { ...state, cargando: false, proyectos };
  }),
  on(proyectosActions.cargarProyectosFailure, (state) => ({
    ...state,
    error: true,
  })),
  on(proyectosActions.seleccionaProyecto, (state, { proyecto }) => ({
    ...state,
    proyecto_seleccionado: proyecto,
  })),
  on(proyectosActions.crearProyecto, (state, { proyecto }) => ({ ...state })),
  on(proyectosActions.crearProyectoSuccess, (state, { proyecto }) => ({
    ...state,
  })),
  on(proyectosActions.crearProyectoFailure, (state, { error }) => ({
    ...state,
  }))
);
