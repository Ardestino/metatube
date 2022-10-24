import { createReducer, on } from "@ngrx/store";
import * as searchActions  from "./search.actions";

export interface SearchState{
  visible : boolean,
  search_term : string,
  search_result : any[],
  selected_result : any,
  loading : boolean
}

export const initialState : SearchState = {
  visible : false,
  search_term : '',
  search_result : [],
  selected_result : null,
  loading : true
}

export const searchReducer = createReducer(
  initialState,
  on(searchActions.mostrarBuscador, state => ({ ...state, visible: true })),
  on(searchActions.ocultarBuscador, state => ({ ...state, visible: false, search_term: '' })),
  on(searchActions.iniciarBusqueda, state => ({ ...state, loading: true })),
  on(searchActions.busquedaExitosa, state => ({ ...state, loading: false,
    search_result: [{
        "channelId": "UCbdSYaPD-lr1kW27UJuk8Pw",
        "title": "QuantumFracture",
        "description": "Ciencia! ¡y con animaciones! El lado más loco (y real) del Universo. Escríbenos: contacto@quantumfracture.es Síguenos en ...",
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_g7vzJobFPYfpnBLcogxdfnyTzDsDmJzvt17mphA=s88-c-k-c0xffffffff-no-rj-mo"
    },
    {
      "channelId": "UCQrJQt7myxmhtXD7-m66w8Q",
      "title": "Quantum Fracture - Topic",
      "description": "",
      "thumbnail": "https://yt3.ggpht.com/poi0S8Xegg784MlvI5fJWxunzEAlH-JapH49rdaW6L2Wae4jdS_KwRMT19bAvx_LFnonb2EHUQ=s88-c-k-c0xffffffff-no-rj-mo"
    },
    {
      "channelId": "UCrBR5eMwyadhgFwKxVYx0fA",
      "title": "Scenio Tv",
      "description": "Repositorio de los programas emitidos en directo en twitch.tv/scenio.",
      "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu8Ijg6jTfRqFlwyK9E18HVhFcfWJd3Gv3jJiSSx=s88-c-k-c0xffffffff-no-rj-mo"
    },
    {
      "channelId": "UCGKzjVZGdJ0YmUqg42xfO5w",
      "title": "Antroporama",
      "description": "Hola! Soy Patri Tezanos, doctoranda en Neurociencia. Y esto es Antroporama, es decir, divulgación científica sobre el Ser ...",
      "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_2uNl69AsM1g0tHTEKEmro41lDnOfiP1lz9JcZ8w=s88-c-k-c0xffffffff-no-rj-mo"
    },
    {
      "channelId": "UCyl2DNBxmjkzVrd1Nhqluug",
      "title": "Oliver Ibáñez",
      "description": "Bienvenido a mi canal, soy Oliver Ibáñez y hago vídeos descubriendo la verdad que nos ocultan. Soy un investigador ...",
      "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-iu8buc4WBAXV42pji08uFSlknw8GJnnoZ0tsYkA=s88-c-k-c0xffffffff-no-rj-mo"
    }]
  })),
  on(searchActions.resultadoSeleccionado, state => ({ ...state,
    selected_result: {
        "channelId": "UCbdSYaPD-lr1kW27UJuk8Pw",
        "title": "QuantumFracture",
        "description": "Ciencia! ¡y con animaciones! El lado más loco (y real) del Universo. Escríbenos: contacto@quantumfracture.es Síguenos en ...",
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_g7vzJobFPYfpnBLcogxdfnyTzDsDmJzvt17mphA=s88-c-k-c0xffffffff-no-rj-mo"
    }
  })),
  on(searchActions.busquedaErronea, state => ({ ...state, loading: false  })),

);
