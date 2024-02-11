import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-better-store-counter-demo',
  template: `
    <app-better-store-counter></app-better-store-counter>
    <app-better-store-counter></app-better-store-counter>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'demo-container',
  },
})
export class BetterStoreCounterDemoComponent {}
