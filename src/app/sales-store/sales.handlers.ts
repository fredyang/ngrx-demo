import {
  StoreModule,
  createFeature,
  createReducer as stateHandler,
  on,
} from '@ngrx/store';
import { SalesState } from '../sales-share/model';
import { apiEvents, homePageEvents, sessionEvents } from './sales.events';
import { EffectsModule } from '@ngrx/effects';
import { ApiEffects } from './sales.api.effects';
import { SessionEffects } from './sales.session.effects';

// to fix an error
// TypeError: Unexpected type 'undefined' in select operator,
// expected 'string' or 'function'
// with the following

const initialState = {
  sessionRenewAt: null,
} as SalesState;

// slot(feature) is bound to recucers
export const salesSlot = createFeature({
  name: 'sales',
  reducer: stateHandler(
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
