import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ngrx-cmp-store-counter-demo',
  template: `
    <app-ngrx-cmp-store-counter></app-ngrx-cmp-store-counter>
    <app-ngrx-cmp-store-counter></app-ngrx-cmp-store-counter>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'demo-container',
  },
})
export class CmpStoreCounterDemoComponent {}
