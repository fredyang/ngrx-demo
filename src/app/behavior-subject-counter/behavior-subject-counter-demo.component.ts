import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-counter-demo',
  template: `
    <app-behavior-subject-counter></app-behavior-subject-counter>
    <app-behavior-subject-counter></app-behavior-subject-counter>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'demo-container',
  },
})
export class BehaviorSubjectCounterDemoComponent {}
