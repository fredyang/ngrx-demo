import { createFeature, createReducer, on } from '@ngrx/store';
import { SalesState } from '../../../sales-share/model';
import { apiEvents } from '../events/api.events';
import { homePageEvents } from '../events/page.events';
import { sessionEvents } from '../events/session.events';

// to fix an error
// TypeError: Unexpected type 'undefined' in select operator,
// expected 'string' or 'function'
// with the following

const initialState: SalesState = {
  user: null,
  refreshSessionAt: null,
  orders: null,
  preferences: null,
};

// slot(feature) is bound to recucers
export const salesSlice = createFeature({
  name: 'sales', // slot path
  reducer: createReducer(
    initialState,
    // update user
    on(apiEvents.loginSuccess, (state, user) => ({ ...state, user })),
    // update refreshSessionAt
    on(apiEvents.loginSuccess, sessionEvents.refreshed, (state) => ({
      ...state,
      refreshSessionAt: new Date(),
    })),
    // update order
    on(apiEvents.orderLoaded, (state, { orders }) => {
      return { ...state, orders };
    }),
    // update preferences
    on(apiEvents.preferencesLoaded, (state, { preferences }) => {
      return { ...state, preferences };
    }),
    // reset everything
    on(homePageEvents.logout, sessionEvents.expired, () => {
      return { ...initialState };
    })
  ),
});
