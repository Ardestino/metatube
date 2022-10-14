import { createAction, props } from '@ngrx/store';
import { Proyecto } from 'src/api';

export const cargarProyectos = createAction('[Proyectos] Cargar proyectos');

export const cargarProyectosSuccess = createAction(
  '[Proyectos] Carga de proyectos exitosa',
  props<{proyectos: Proyecto[]}>()
  );

export const cargarProyectosFailure = createAction(
  '[Proyectos] Error al cargar proyectos',
  props<{error: any}>()
  );

  export const seleccionaProyecto = createAction(
    '[Proyectos] Seleccionando proyecto',
    props<{proyecto: Proyecto}>()
    );
