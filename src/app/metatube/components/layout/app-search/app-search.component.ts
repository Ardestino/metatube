import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core'

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/metatube/store';
import * as SearchActions from "src/app/metatube/store/search/search.actions";

interface SearchResult{
    channelId : string
    title : string
    description : string
    thumbnail : string
  }

@Component({
  selector: 'youpez-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit, AfterViewInit {

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.onClose()
    } if (event.key === 'Enter'){
      this.onSearch();
    }
  }

  @ViewChild('searchElement') searchElement: ElementRef

  public loading$ : Observable<boolean>;
  public search_text$ : Observable<string>;
  public search_result$ : Observable<SearchResult[]>;
  public selected_result$ : Observable<SearchResult>;


  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.loading$ = this.store.select(state => state.search.loading);
    this.search_text$ = this.store.select(state => state.search.search_term);
    this.search_result$ = this.store.select(state => state.search.search_result);
    this.selected_result$ = this.store.select(state => state.search.selected_result);

    this.search_result$.subscribe({
      next : (result) =>{
        if (result.length > 0) {
          this.store.dispatch(SearchActions.resultadoSeleccionado({ selected : result[0] }));
        }else{
          this.store.dispatch(SearchActions.resultadoSeleccionado({ selected : null }));
        }
      }}
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
      this.store.dispatch(SearchActions.iniciarBusqueda({search_term : 'prueba'  }));
    }, 200)
    setTimeout(() => {
      this.store.dispatch(SearchActions.busquedaExitosa({results : []}));
    }, 700)
  }

  onSearch(): void {
    setTimeout(() => {
      // TODO: Dar el foco al buscador al momento de que es visible
      this.searchElement.nativeElement.focus()
      this.store.dispatch(SearchActions.iniciarBusqueda({ search_term : ''}));
    }, 200)
    setTimeout(() => {
      this.store.dispatch(SearchActions.busquedaExitosa({ results :
        [
          {
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
          }
        ]}));
    }, 700)
  }

  onSelectResult(result){
    this.store.dispatch(SearchActions.resultadoSeleccionado({ selected : result }));
  }

  onClose() {
    this.store.dispatch(SearchActions.ocultarBuscador());
    this.store.dispatch(SearchActions.resultadoSeleccionado({ selected : null }));
  }

}
