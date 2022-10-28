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
import { ChannelSearchResult } from "src/app/metatube/store/search/search.reducer"



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

  public search_text : string;
  public loading$ : Observable<boolean>;
  public search_result$ : Observable<ChannelSearchResult[]>;
  public selected_result$ : Observable<ChannelSearchResult>;


  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.loading$ = this.store.select(state => state.search.loading);
    this.search_result$ = this.store.select(state => state.search.search_result);
    this.selected_result$ = this.store.select(state => state.search.selected_result);
  }

  ngAfterViewInit(): void {
      this.searchElement.nativeElement.focus();
  }

  onSearch(): void {
      this.store.dispatch(SearchActions.iniciarBusqueda({ search_term : this.searchElement.nativeElement.value }));
  }

  onSelectResult(result){
    this.store.dispatch(SearchActions.resultadoSeleccionado({ selected : result }));
  }

  onClose() {
    this.store.dispatch(SearchActions.ocultarBuscador());
  }

}
