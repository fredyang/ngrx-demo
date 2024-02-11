import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-counter-with-bug-demo',
  template: `
    <app-behavior-subject-counter-with-bug></app-behavior-subject-counter-with-bug>
    <app-behavior-subject-counter-with-bug></app-behavior-subject-counter-with-bug>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'demo-container',
  },
})
export class BehaviorSubjectCounterWithBugDemoComponent {}
