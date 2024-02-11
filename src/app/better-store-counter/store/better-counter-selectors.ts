import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterStorePath } from '../better-counter-module';
import { BetterCounterStoreRoot } from './better-counter-reducers';

/**
 * The root selector of counter store
 */
export const selectBetterCounterStore =
  createFeatureSelector<BetterCounterStoreRoot>(counterStorePath);

/**
 * Select the counter result
 */
export const selectBetterCounterResult = createSelector(
  selectBetterCounterStore,
  (state) => state.result
);
