import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter-reducers';

export const counterStorePath = 'counter';

export const counterStoreModules = [
  StoreModule.forFeature(counterStorePath, counterReducer),
  // EffectsModule.forFeature([Effects]),
];

// write (update)
// 1. actions (aka events), actions are not bound to store path
//    UI raise events to write
// 2. reducers (aka event handlers), reducers are bound to store path
//    UI has no reference to reducers

// read
// 3. selector expose of a value a store as obserable, selecor is bound to store
//    UI code ( obs$ = store.select(selector) )

// registration
// 1. register a path in store like StoreModule.forRoot(path, reducer);
//    StoreModule.forFeature(path, reducer);
// 2. EffectsModule.forFeature([Effects]),
