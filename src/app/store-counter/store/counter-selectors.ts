import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterStorePath } from '../counter-module';
import { CounterStoreRoot } from './counter-reducers';

/**
 * The root selector of counter store
 */
export const selectCounterStore =
  createFeatureSelector<CounterStoreRoot>(counterStorePath);

/**
 * Select the counter result
 */
export const selectCounterResult = createSelector(
  selectCounterStore,
  (state) => state.result
);
