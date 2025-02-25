import { Injectable } from '@angular/core';
import { Actions as Events, createEffect, ofType } from '@ngrx/effects';
import {
  EMPTY,
  concatMap,
  debounceTime,
  fromEvent,
  map,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';
import { homePageEvents } from '../events/page.events';
import { apiEvents } from '../events/api.events';
import { sessionEvents } from '../events/session.events';

export const expiredInSeconds = 10;

@Injectable()
export class SessionEffects {
  constructor(private events$: Events) {}

  trackSession$ = createEffect(() =>
    this.events$.pipe(
      ofType(apiEvents.loginSuccess),
      concatMap(() => {
        return fromEvent(document, 'mousemove').pipe(
          takeUntil(
            // if user logout or session expired, stop tracking mouse event
            this.events$.pipe(
              ofType(sessionEvents.expired, homePageEvents.logout)
            )
          ),
          // mouse event continuously fired , we want to slow down the event
          debounceTime(100)
        );
      }),
      map(() => sessionEvents.refreshed())
    )
  );

  setSessionExpired$ = createEffect(() =>
    this.events$.pipe(
      ofType(
        sessionEvents.refreshed,
        apiEvents.loginSuccess,
        homePageEvents.logout
      ),
      switchMap((event) => {
        // switchMap can finished the previous timer if new event comes in
        // If it is logout, we don't want to create a new timer
        // so we return EMPTY, which will not emit any value
        if (event.type === homePageEvents.logout.type) {
          return EMPTY;
        } else {
          return timer(expiredInSeconds * 1000);
        }
      }),
      map(() => sessionEvents.expired())
    )
  );
}
