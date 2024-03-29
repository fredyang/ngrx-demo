import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { salesSelectors } from './sales.reducers-selectors-modules';
import { homePageEvents } from './sales.actions';
import { interval, map } from 'rxjs';
import { expiredInSeconds } from './session.effects';
import { concatLatestFrom } from '@ngrx/effects';

@Component({
  selector: 'app-sales-store',
  template: `
    <div *ngIf="sales$ | async as sales">
      <p>
        <button *ngIf="!sales.user" (click)="login()">Login</button>
        <button *ngIf="sales.user" (click)="logout()">Logout</button>
      </p>
      <ng-container *ngIf="sales.user">
        <h2>Hello, {{ sales.user.firstName }} {{ sales.user.lastName }}</h2>
        <p>
          Session is valid from
          <strong>{{ sales.sessionValidSince | date : 'h:mm:ss a' }}</strong
          >. It will be auto logged out in
          <strong>{{ remainingTime$ | async }}</strong> seconds. Move your mouse
          to renew your session.
        </p>
        <div class="flex">
          <div>
            <h2>You orders:</h2>
            <p *ngFor="let order of sales.orders">
              {{ order }}
            </p>
          </div>
          <div>
            <h2>You preferences:</h2>
            <p *ngFor="let preference of sales.preferences">
              {{ preference }}
            </p>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .flex {
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesStoreComponent {
  constructor(private store: Store) {}

  sales$ = this.store.select(salesSelectors.selectSalesState);

  remainingTime$ = interval(300).pipe(
    concatLatestFrom(() =>
      this.store.select(salesSelectors.selectSessionValidSince)
    ),
    map(([, sessionValidSince]) =>
      Math.ceil(
        (sessionValidSince!.getTime() +
          expiredInSeconds * 1000 -
          new Date().getTime()) /
          1000
      )
    )
  );

  login() {
    this.store.dispatch(
      homePageEvents.logIn({ userName: 'johndoe', password: '1234' })
    );
  }

  logout() {
    this.store.dispatch(homePageEvents.logOut());
  }
}
