import { createAction, props } from '@ngrx/store';
import { Channel, Proyecto } from 'src/api';

export const cargarProyectos = createAction('[Proyectos] Cargar proyectos');

export const cargarProyectosSuccess = createAction(
  '[Proyectos] Carga de proyectos exitosa',
  props<{ proyectos: Proyecto[] }>()
);

export const cargarProyectosFailure = createAction(
  '[Proyectos] Error al cargar proyectos',
  props<{ error: any }>()
);

export const seleccionaProyecto = createAction(
  '[Proyectos] Seleccionando proyecto',
  props<{ proyecto: Proyecto }>()
);

export const crearProyecto = createAction(
  '[Proyectos] Crear proyecto',
  props<{ proyecto: Proyecto}>()
)

export const crearProyectoSuccess = createAction(
  '[Proyectos] Creacion de proyecto exitoso',
  props<{ proyecto: Proyecto}>()
)

export const crearProyectoFailure = createAction(
  '[Proyectos] Creacion de proyecto fracaso',
  props<{ error: any}>()
)

export const cargarCanal = createAction(
  '[Proyectos] Cargar canal',
  props<{ canal: string}>()
)

export const cargarCanalSuccess = createAction(
  '[Proyectos] Carga del canal exitoso',
  props<{ canal: Channel}>()
)

export const cargarCanalFailure = createAction(
  '[Proyectos] Creacion de proyecto fracaso',
  props<{ error: any}>()
)
