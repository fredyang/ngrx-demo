import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Debug } from '../debug';
import { SimpleCounterService } from './simple-counter-service';

@Component({
  selector: 'app-simple-counter',
  template: `
    {{ logId() }}
    <h1>buggy primitive counter: {{ id }}</h1>
    <h2>Result: {{ result }}</h2>

    <button (click)="add()">Add</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCounterComponent extends Debug {
  constructor(private simpleService: SimpleCounterService) {
    super();
  }

  get result() {
    return this.simpleService.result;
  }

  add() {
    this.simpleService.add();
  }
}
