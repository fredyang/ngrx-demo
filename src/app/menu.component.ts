import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <ul>
      <li><a routerLink="simple">buggy simple counter</a></li>
      <li>
        <a routerLink="behavior-subject-with-bug"
          >buggy behavior-subject counter</a
        >
      </li>
      <li><a routerLink="behavior-subject">behavior-subject counter</a></li>
      <li><a routerLink="component-store">component-store counter</a></li>
      <li><a routerLink="store">store counter</a></li>
      <li><a routerLink="better-store">better store counter</a></li>
      <li><a routerLink="sales">Store Sales</a></li>
      <li><a routerLink="sales-cmp-store">Component-store Sales</a></li>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {}
