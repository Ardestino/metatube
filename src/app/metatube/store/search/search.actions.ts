import { createAction, props } from '@ngrx/store';

export const mostrarBuscador = createAction('[Search] Monstrar Buscador');
export const ocultarBuscador = createAction('[Search] Ocultar Buscador');
export const iniciarBusqueda = createAction('[Search] Iniciar Busqueda', props<{search_term: string}>());
export const busquedaExitosa = createAction('[Search] Busqueda Exitosa', props<{results : any[]}>());
export const busquedaErronea = createAction('[Search] Busqueda Erronea', props<{error: any}>());
export const resultadoSeleccionado = createAction('[Search] Resultado seleccionado', props<{selected : any}>());
