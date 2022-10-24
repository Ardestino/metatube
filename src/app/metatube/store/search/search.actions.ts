import { createAction, props } from '@ngrx/store';

export const mostrarBuscador = createAction('[Search] Monstrar Buscador');
export const ocultarBuscador = createAction('[Search] Ocultar Buscador');
export const iniciarBusqueda = createAction('[Search] Iniciar Busqueda'); // TODO: Agregar parametro
export const busquedaExitosa = createAction('[Search] Busqueda Exitosa');
export const busquedaErronea = createAction('[Search] Busqueda Erronea');
export const resultadoSeleccionado = createAction('[Search] Resultado seleccionado');
