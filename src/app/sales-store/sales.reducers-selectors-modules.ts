import { StoreModule, createFeature, createReducer, on } from '@ngrx/store';
import { SalesState } from '../sales-share/model';
import { apiEvents, homePageEvents, sessionEvents } from './sales.actions';
import { EffectsModule } from '@ngrx/effects';
import { ApiEffects } from './api.effects';
import { SessionEffects } from './session.effects';

// to fix an error
// TypeError: Unexpected type 'undefined' in select operator,
// expected 'string' or 'function'
// with the following

const initialState = {
  sessionRenewAt: null,
} as SalesState;

const salesStore = createFeature({
  name: 'sales',
  reducer: createReducer(
    initialState,
    //one action trigger two reducers
    //
    on(
      apiEvents.loginSuccess,
      /* update user */ (state, user) => ({ ...state, user })
    ),
    //one reducer respond to two actions
    on(apiEvents.loginSuccess, sessionEvents.renewed, (state) => ({
      ...state,
      sessionRenewAt: new Date(),
    })),
    //
    on(apiEvents.orderLoaded, function setOrders(state, { orders }) {
      return { ...state, orders };
    }),
    on(
      apiEvents.preferencesLoaded,
      function setPreferences(state, { preferences }) {
        return { ...state, preferences };
      }
    ),
    //one reducer respond to two actions
    on(homePageEvents.logOut, sessionEvents.timeout, function clearSalesData() {
      return {} as SalesState;
    })
  ),
});

export const salesSelectors = salesStore as Omit<
  typeof salesStore,
  'name' | 'reducer'
>;

export const salesStoreModules = [
  StoreModule.forFeature(salesStore),
  EffectsModule.forFeature(ApiEffects, SessionEffects),
];
