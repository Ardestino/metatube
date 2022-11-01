import { createReducer, on } from "@ngrx/store";
import { Proyecto, Channel } from "src/api/index";
import * as proyectosActions  from "./proyectos.actions";

export interface ProyectosState{
  cargando : boolean,
  error : boolean,
  proyectos : Proyecto[],
  proyecto_seleccionado : Proyecto,
  canal_seleccionado : Channel,
  grafica_mejor_dia : any
}

export const initialState: ProyectosState = {
  cargando: false,
  error: false,
  proyectos: [],
  proyecto_seleccionado: {
    id: -1,
    nombre: 'no seleccionado',
    url: '/',
    canal: '',
    usuario: 0,
  },
  canal_seleccionado: {
    id: '',
    title: '',
    description: '',
    publishedAt: '',
    defaultLanguage: '',
    country: '',
    thumbnail_default_url: '',
    thumbnail_high_url: '',
    viewCount: 0,
    subscriberCount: 0,
    hiddenSubscriberCount: true,
    videoCount: 0,
    topics: [],
    topicCategories: [],
    keywords: [],
    playlistId: '',
  },
  grafica_mejor_dia : []
};

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
  })),
  on(proyectosActions.cargarCanalSuccess, (state, {canal})=>({...state, canal_seleccionado: canal})),
  on(proyectosActions.cargarGraficaBestDay, (state, {data})=> ({...state, grafica_mejor_dia: data.list}))
);
