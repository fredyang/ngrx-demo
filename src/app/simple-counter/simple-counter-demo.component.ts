import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-simple-counter-demo',
  template: `
    <app-simple-counter></app-simple-counter>
    <app-simple-counter></app-simple-counter>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'demo-container',
  },
})
export class SimpleCounterDemoComponent {}
