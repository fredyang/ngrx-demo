import { StoreModule, createFeature, createReducer, on } from '@ngrx/store';
import { SalesState } from '../sales-share/model';
import { apiEvents, homePageEvents, systemEvents } from './sales.actions';
import { EffectsModule } from '@ngrx/effects';
import { ApiEffects } from './api.effects';
import { SessionEffects } from './session.effects';

// to fix an error
// TypeError: Unexpected type 'undefined' in select operator,
// expected 'string' or 'function'
// with the following

const initialState = {
  sessionValidSince: null,
} as SalesState;

const salesFeature = createFeature({
  name: 'sales',
  reducer: createReducer(
    initialState,
    //one action trigger two reducers
    on(apiEvents.loginSuccess, function updateUser(state, user) {
      return { ...state, user };
    }),
    //one reducer respond to two actions
    on(
      apiEvents.loginSuccess,
      systemEvents.sessionRenewed,
      function renewSession(state) {
        return { ...state, sessionValidSince: new Date() };
      }
    ),
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
    on(
      homePageEvents.logOut,
      systemEvents.sessionTimeout,
      function clearSalesData() {
        return {} as SalesState;
      }
    )
  ),
});

export const salesSelectors = salesFeature as Omit<
  typeof salesFeature,
  'name' | 'reducer'
>;

export const salesStoreModules = [
  StoreModule.forFeature(salesFeature),
  EffectsModule.forFeature(ApiEffects, SessionEffects),
];
