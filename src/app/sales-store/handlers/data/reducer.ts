import { createFeature, createReducer, on } from '@ngrx/store';
import { SalesState } from '../../../sales-share/model';
import { apiEvents } from '../../events/api.events';
import { homePageEvents } from '../../events/page.events';
import { sessionEvents } from '../../events/session.events';

// to fix an error
// TypeError: Unexpected type 'undefined' in select operator,
// expected 'string' or 'function'
// with the following

const initialState = {
  user: null,
  sessionRenewAt: null,
  orders: null,
  preferences: null,
} as SalesState;

// slot(feature) is bound to recucers
export const salesSlot = createFeature({
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
    on(homePageEvents.logout, sessionEvents.expired, function clearSalesData() {
      return {} as SalesState;
    })
  ),
});
