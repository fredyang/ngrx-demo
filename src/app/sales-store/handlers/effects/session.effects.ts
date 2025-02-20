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
          // mouse event continuously fired , we want to slow down the event
          debounceTime(300),

          // tap(() => {
          //   // normally an effect should only return one action
          //   // this is hack
          //   this.store.dispatch(sessionEvents.renewed());
          // }),
          // start tracking at the first time without waiting mouse move
          startWith(true),

          // switchMap accept and iput value, convert the input to
          // a new observable, then subscribe the observable, and output its value
          // emitted
          switchMap(() => timer(expiredInSeconds * 1000)),
          takeUntil(
            this.events$.pipe(
              ofType(sessionEvents.timeout, homePageEvents.wantToLogout)
            )
          )
        );
      }),
      map(() => sessionEvents.timeout())
    )
  );
}
