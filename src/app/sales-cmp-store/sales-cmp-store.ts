import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { SalesState, UserInfo } from '../sales-share/model';
import {
  EMPTY,
  Observable,
  concatMap,
  debounceTime,
  fromEvent,
  merge,
  startWith,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import { ApiService } from '../sales-share/api.service';
import { expiredInSeconds } from '../sales-store/ngrx/effect.handlers/session.effect.handler';

@Injectable({
  providedIn: 'root',
})
export class SalesCmpStore extends ComponentStore<SalesState> {
  constructor(private salesApi: ApiService) {
    super({} as SalesState);
  }

  login = this.effect(
    (userInfo$: Observable<{ userName: string; password: string }>) => {
      return userInfo$.pipe(
        concatMap(({ userName, password }) => {
          return this.salesApi.login(userName, password).pipe(
            tap((userInfo) => {
              this.setUser(userInfo);
              this.renewSession();
              this.trackSession();
            })
          );
        }),
        concatMap(({ userName }) => {
          return merge(
            this.salesApi.getPreferences(userName).pipe(
              tap((preferences) => {
                this.setPreferences(preferences);
              })
            ),
            this.salesApi.getUserOrders(userName).pipe(
              tap((orders) => {
                this.setOrders(orders);
              })
            )
          );
        })
      );
    }
  );

  trackSession = this.effect(() => {
    return this.select((s) => s.user).pipe(
      switchMap((user) => {
        return !!user
          ? fromEvent(document, 'mousemove').pipe(
              debounceTime(300),
              tap(() => this.renewSession()),
              startWith(true),
              switchMap(() => timer(expiredInSeconds * 1000))
            )
          : EMPTY;
      }),
      tap(() => this.logout())
    );
  });

  logout = this.updater(() => ({} as SalesState));

  setUser = this.updater((state, userInfo: UserInfo) => {
    return { ...state, user: userInfo };
  });

  setPreferences = this.updater((state, preferences: string[]) => {
    return { ...state, preferences };
  });

  setOrders = this.updater((state, orders: string[]) => {
    return { ...state, orders };
  });

  renewSession = this.updater((state) => {
    return { ...state, refreshSessionAt: new Date() };
  });
}
