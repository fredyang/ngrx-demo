import { createReducer, on } from '@ngrx/store';
import { actionAdd } from './counter-actions';

export interface CounterStoreRoot {
  result: number;
}

export const counterReducer = createReducer(
  { result: 0 } as CounterStoreRoot,
  on(actionAdd, (state, action) => {
    return {
      result: action.value + state.result,
    };
  })
);
