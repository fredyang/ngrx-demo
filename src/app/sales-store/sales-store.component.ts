import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { salesViewData } from './ngrx/viewData';
import { interval, map } from 'rxjs';
import { concatLatestFrom } from '@ngrx/effects';
import { homePageEvents } from './ngrx/events/page.events';
import { expiredInSeconds } from './ngrx/effect.handlers/session.effect.handler';

@Component({
  selector: 'app-sales-store',
  template: `
    <div *ngIf="sales$ | async as sales">
      <div class="demo-container">
        <p>
          <button *ngIf="!sales.user" (click)="login()">Login</button>
          <button *ngIf="sales.user" (click)="logout()">Logout</button>
        </p>
      </div>

      <ng-container *ngIf="sales.user">
        <div class="demo-container">
          <div>
            <h2>Hello, {{ sales.user.firstName }} {{ sales.user.lastName }}</h2>
            The current session was refreshed at
            <strong>{{ sales.refreshSessionAt | date : 'h:mm:ss a' }}</strong
            >. It will be logout after
            <strong>{{ remainingTime$ | async }}</strong> seconds,
            <p>
              You can move your mouse to keep the session contintue before
              logout.
            </p>
          </div>
        </div>
        <div class="demo-container">
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

  sales$ = this.store.select(salesViewData.selectSalesState);

  remainingTime$ = interval(300).pipe(
    concatLatestFrom(() =>
      this.store.select(salesViewData.selectRefreshSessionAt)
    ),
    map(([, refreshSessionAt]) =>
      Math.ceil(
        (refreshSessionAt!.getTime() +
          expiredInSeconds * 1000 -
          new Date().getTime()) /
          1000
      )
    )
  );

  login() {
    this.store.dispatch(
      homePageEvents.login({ userName: 'johndoe', password: '1234' })
    );
  }

  logout() {
    this.store.dispatch(homePageEvents.logout());
  }
}
