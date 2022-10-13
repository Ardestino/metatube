import { Component, OnInit } from '@angular/core';
import { Store, select, META_REDUCERS } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from 'src/app/metatube/metatube.actions';
import { AppState, MetaState } from 'src/app/metatube/metatube.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{

  count$: Observable<MetaState>

  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    this.count$ = this.store.select('meta');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
