import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './metatube.actions';

export const metaFeatureKey = 'meta';

export interface AppState{
  meta : MetaState
}

export interface MetaState {
  counter : number
}

export const initialState : MetaState = {
  counter : 0
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({...state, counter : state.counter + 1})),
  on(decrement, (state) => ({...state, counter : state.counter - 1})),
  on(reset, (state) => ({...state, counter : 0}))
);
