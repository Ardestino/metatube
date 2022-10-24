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
      this.store.dispatch(SearchActions.iniciarBusqueda());
      this.onSearch();
    }
  }

  @ViewChild('searchElement') searchElement: ElementRef

  public loading$ : Observable<boolean>;
  public search_text$ : Observable<string>;
  public search_result$ : Observable<SearchResult[]>;
  public selected_result$ : Observable<SearchResult>;


  constructor(private store: Store<AppState>) {
    this.loading$ = store.select(state => state.search.loading);
    this.search_text$ = store.select(state => state.search.search_term);
    this.search_result$ = store.select(state => state.search.search_result);
    this.selected_result$ = store.select(state => state.search.selected_result);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
      this.store.dispatch(SearchActions.iniciarBusqueda());
    }, 200)
    setTimeout(() => {
      this.store.dispatch(SearchActions.busquedaExitosa());
    }, 700)
  }

  onSearch(): void {
    setTimeout(() => {
      // TODO: Dar el foco al buscador al momento de que es visible
      this.searchElement.nativeElement.focus()
    }, 200)
    setTimeout(() => {
      this.store.dispatch(SearchActions.busquedaExitosa());
      this.store.dispatch(SearchActions.resultadoSeleccionado());
    }, 700)
  }

  onClose() {
    this.store.dispatch(SearchActions.ocultarBuscador());
  }

}
