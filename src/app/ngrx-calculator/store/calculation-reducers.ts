import { createReducer, on } from '@ngrx/store';
import { add } from './calculation-actions';
import { CalculationStateRoot } from './calculation-selectors';

const initialState: CalculationStateRoot = { result: 0 };

export const calculationReducer = createReducer(
  initialState,
  on(add, (state, action) => {
    return {
      result: action.value + state.result,
    };
  })
);
