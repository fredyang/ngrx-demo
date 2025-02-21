import { Injectable } from '@angular/core';
import { Actions as Events, createEffect, ofType } from '@ngrx/effects';
import {
  EMPTY,
  debounceTime,
  fromEvent,
  map,
  startWith,
  switchMap,
  takeUntil,
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
      ofType(apiEvents.loginSuccess),
      // switchMap can cancel if user logout manually
      switchMap(() => {
        return fromEvent(document, 'mousemove').pipe(
          // if user logout or session expired, stop tracking mouse event
          takeUntil(
            this.events$.pipe(
              ofType(sessionEvents.expired, homePageEvents.wantToLogout)
            )
          ),
          // mouse event continuously fired , we want to slow down the event
          debounceTime(1000)
        );
      }),
      map(() => sessionEvents.renewed())
    )
  );

  setSessionExpired$ = createEffect(() =>
    this.events$.pipe(
      ofType(
        sessionEvents.renewed,
        apiEvents.loginSuccess,
        homePageEvents.wantToLogout
      ),
      // use switchMap so that when it is renewed, the timer will be reset
      switchMap((event) => {
        // if it is logout, stop emitting any value
        // so that the session will not be expired
        if (event.type === homePageEvents.wantToLogout.type) {
          return EMPTY;
        } else {
          return timer(expiredInSeconds * 1000);
        }
      }),
      map(() => sessionEvents.expired())
    )
  );
}
