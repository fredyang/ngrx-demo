import { StoreModule } from '@ngrx/store';
import { calculationReducer } from './calculation-reducers';

// implement
// reducer, on action fired, update store
// actions referenced by reducer, UI
// selector referenced by UI

// consumer
// ui read: store.select(selector)
// ui update: store.dispatch(action)

//registration
// StoreModule.forRoot(path, reducer);
// StoreModule.forFeature(path, reducer);
// EffectsModule.forFeature([Effects]),
export const calculationPath = 'calculation';

export const calculationModules = [
  StoreModule.forFeature(calculationPath, calculationReducer),
  // EffectsModule.forFeature([Effects]),
];
