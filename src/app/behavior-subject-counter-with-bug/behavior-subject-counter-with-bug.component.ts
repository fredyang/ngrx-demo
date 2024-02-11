import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Debug } from '../debug';
import { BehaviorCounterService } from '../behavior-subject-counter/behavior-subject-counter-service';

@Component({
  selector: 'app-behavior-subject-counter-with-bug',
  template: `
    {{ logId() }}
    <h1>buggy behavior subject counter: {{ id }}</h1>
    <h2>Result: {{ result }}</h2>

    <button (click)="add()">Add</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BehaviorSubjectCounterWithBugComponent extends Debug {
  constructor(
    private rxjsService: BehaviorCounterService,
    changeDetector: ChangeDetectorRef
  ) {
    super();
    this.rxjsService.result$.subscribe((result) => {
      this.result = result;
      changeDetector.markForCheck();
    });
  }

  result!: number;

  add() {
    this.rxjsService.add();
  }
}
