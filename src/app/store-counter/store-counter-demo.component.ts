import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-store-counter-demo',
  template: `
    <app-store-counter></app-store-counter>
    <app-store-counter></app-store-counter>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'demo-container',
  },
})
export class StoreCounterDemoComponent {}
