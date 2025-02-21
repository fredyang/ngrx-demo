import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { ApiService } from '../../../sales-share/api.service';
import { apiEvents } from '../events/api.events';
import { homePageEvents } from '../events/page.events';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ApiEffects {
  constructor(private events$: Actions, private apiService: ApiService) {}

  login$ = createEffect(() =>
    this.events$.pipe(
      ofType(homePageEvents.login),
      concatMap(({ userName, password }) =>
        this.apiService
          .login(userName, password)
          .pipe(map((value) => apiEvents.loginSuccess(value)))
      )
    )
  );

  // another way to implement getUserOrders
  // getUserOrders$ = createEffect(() =>
  //   this.events$.pipe(
  //     ofType(homePageEvents.login),
  //     delay(10),
  //     concatLatestFrom(() =>
  //       this.store
  //         .select(salesSelectors.selectUser)
  //         .pipe(map((user) => user?.userName))
  //     ),
  //     map(([_, userName]) => userName),
  //     filter((userName) => !!userName),
  //     switchMap((userName) =>
  //       this.apiService
  //         .getUserOrders(userName!)
  //         .pipe(map((orders) => apiEvents.orderLoaded({ orders })))
  //     )
  //   )
  // );

  getUserOrders$ = createEffect(() =>
    this.events$.pipe(
      ofType(apiEvents.loginSuccess),
      concatMap(({ userName }) =>
        this.apiService
          .getUserOrders(userName)
          .pipe(map((orders) => apiEvents.orderLoaded({ orders })))
      )
    )
  );

  getPreferences$ = createEffect(() =>
    this.events$.pipe(
      ofType(apiEvents.loginSuccess),
      concatMap(({ userName }) =>
        this.apiService
          .getPreferences(userName)
          .pipe(
            map((preferences) => apiEvents.preferencesLoaded({ preferences }))
          )
      )
    )
  );
}
