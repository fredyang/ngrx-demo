import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, map } from 'rxjs';
import { SalesCmpStore } from './sales-cmp-store';
import { concatLatestFrom } from '@ngrx/effects';

const expiredInSeconds = 10;
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
export class SalesCmpStoreComponent {
  constructor(private salesService: SalesCmpStore) {}

  sales$ = this.salesService.state$;

  remainingTime$ = interval(300).pipe(
    concatLatestFrom(() =>
      this.salesService.select((state) => state.sessionValidSince)
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
    this.salesService.login({
      userName: 'johndoe',
      password: '1234',
    });
  }

  logout() {
    this.salesService.logout();
  }
}
