import { createAction, props } from '@ngrx/store';
import { User } from "src/api";

export const iniciarSesion = createAction('[Usuarios] Iniciar Sesion');
export const cerrarSesion = createAction('[Usuarios] Cerrar Sesion');
