import { StoreModule } from '@ngrx/store';
import { betterCounterReducer } from './store/better-counter-reducers';

export const counterStorePath = 'better-counter';

export const betterCounterStoreModules = [
  StoreModule.forFeature(counterStorePath, betterCounterReducer),
];
