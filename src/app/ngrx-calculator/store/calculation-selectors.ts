import { createFeatureSelector, createSelector } from '@ngrx/store';
import { calculationPath } from './calculation-module';

export interface CalculationStateRoot {
  result: number;
}
export const selectCalculationRoot =
  createFeatureSelector<CalculationStateRoot>(calculationPath);

export const selectCalculationResult = createSelector(
  selectCalculationRoot,
  (state) => state.result
);
