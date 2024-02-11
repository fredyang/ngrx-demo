import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
import { homePageEvents, apiEvents, systemEvents } from './sales.actions';
import { Store } from '@ngrx/store';

export const expiredInSeconds = 10;

@Injectable({
  providedIn: 'root',
})
export class SessionEffects {
  constructor(private actions$: Actions, private store: Store) {}

  trackSession$ = createEffect(() =>
    this.actions$.pipe(
      //the effect handle to events
      ofType(apiEvents.loginSuccess, homePageEvents.logOut),
      // switchMap can cancel if user logout manually
      switchMap((event) => {
        return event.type === apiEvents.loginSuccess.type
          ? fromEvent(document, 'mousemove').pipe(
              debounceTime(300),
              tap(() => {
                // normally an effect should only return one action
                // this is hack
                this.store.dispatch(systemEvents.sessionRenewed());
              }),
              // start tracking at the first time without waiting mouse move
              startWith(true),
              // switchMap can cancel the previous setup up by previous mouse event
              switchMap(() => timer(expiredInSeconds * 1000))
            )
          : // in case user log out, stop tracking
            EMPTY;
      }),
      map(() => systemEvents.sessionTimeout())
    )
  );
}
