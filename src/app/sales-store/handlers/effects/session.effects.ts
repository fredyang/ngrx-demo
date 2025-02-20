import { Injectable } from '@angular/core';
import { Actions as Events, createEffect, ofType } from '@ngrx/effects';
import {
  EMPTY,
  debounceTime,
  fromEvent,
  map,
  startWith,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { homePageEvents } from '../../events/page.events';
import { apiEvents } from '../../events/api.events';
import { sessionEvents } from '../../events/session.events';

export const expiredInSeconds = 10;

@Injectable({
  providedIn: 'root',
})
export class SessionEffects {
  constructor(private events$: Events, private store: Store) {}

  trackSession$ = createEffect(() =>
    this.events$.pipe(
      //the effect handle to events
      ofType(apiEvents.loginSuccess, homePageEvents.logOut),
      // switchMap can cancel if user logout manually
      switchMap((event) => {
        console.log('event type', event.type);
        return event.type === apiEvents.loginSuccess.type
          ? fromEvent(document, 'mousemove').pipe(
              debounceTime(300),
              tap(() => {
                // normally an effect should only return one action
                // this is hack
                this.store.dispatch(sessionEvents.renewed());
              }),
              // start tracking at the first time without waiting mouse move
              startWith(true),
              // switchMap can cancel the previous setup up by previous mouse event
              switchMap(() => timer(expiredInSeconds * 1000))
            )
          : // in case user log out, stop tracking
            EMPTY;
      }),
      map(() => sessionEvents.timeout())
    )
  );
}
