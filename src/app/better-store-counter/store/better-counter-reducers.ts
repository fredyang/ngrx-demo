import { createReducer, on } from '@ngrx/store';
import { addButtonClicked } from '../better-store-counter.actions';

export interface BetterCounterStoreRoot {
  result: number;
}

export const betterCounterReducer = createReducer(
  { result: 0 } as BetterCounterStoreRoot,
  on(addButtonClicked, (state, action) => {
    return {
      result: action.value + state.result,
    };
  })
);
