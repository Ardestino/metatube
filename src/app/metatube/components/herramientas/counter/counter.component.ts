import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from 'src/app/metatube/store/counter/counter.actions';
import { AppState } from 'src/app/metatube/store';
import { CounterState } from "src/app/metatube/store/counter/counter.reducers";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{

  counter$: Observable<CounterState>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
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
