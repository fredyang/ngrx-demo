import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { homePageEvents, apiEvents } from './sales.actions';
import { ApiService } from '../sales-share/api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homePageEvents.logIn),
      concatMap(({ userName, password }) =>
        this.apiService
          .login(userName, password)
          .pipe(map((value) => apiEvents.loginSuccess(value)))
      )
    )
  );

  getUserOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiEvents.loginSuccess),
      concatMap(({ userName }) =>
        this.apiService
          .getUserOrders(userName)
          .pipe(map((orders) => apiEvents.orderLoaded({ orders })))
      )
    )
  );

  getPreferences$ = createEffect(() =>
    this.actions$.pipe(
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
