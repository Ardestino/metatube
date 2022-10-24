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
import { AppState } from 'src/app/metatube/store';
import * as SearchActions from "src/app/metatube/store/search/search.actions";


@Component({
  selector: 'youpez-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit, AfterViewInit {

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.onClose()
    }
  }

  @ViewChild('searchElement') searchElement: ElementRef

  public loading: boolean = true

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus()
    }, 200)
    setTimeout(() => {
      this.loading = false
    }, 700)
  }

  onClose() {
    this.store.dispatch(SearchActions.ocultarBuscador());
  }

}
