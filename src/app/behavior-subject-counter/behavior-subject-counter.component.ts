import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Debug } from '../debug';
import { BehaviorCounterService } from './behavior-subject-counter-service';

@Component({
  selector: 'app-behavior-subject-counter',
  template: `
    {{ logId() }}
    <h1>behavior subject counter: {{ id }}</h1>
    <h2>Result: {{ result$ | async }}</h2>

    <button (click)="add()">Add</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BehaviorSubjectCounterComponent extends Debug {
  constructor(private rxjsService: BehaviorCounterService) {
    super();
  }

  result$ = this.rxjsService.result$;

  add() {
    this.rxjsService.add();
  }
}
