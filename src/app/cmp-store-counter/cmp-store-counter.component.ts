import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Debug } from '../debug';
import { CmpStoreCounterService } from './cmp-store-counter.service';

@Component({
  selector: 'app-ngrx-cmp-store-counter',
  template: `
    {{ logId() }}
    <h1>component store counter: {{ id }}</h1>
    <h2>Result: {{ result$ | async }}</h2>
    <button (click)="add()">Add</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmpStoreCounterComponent extends Debug {
  constructor(private service: CmpStoreCounterService) {
    super();
  }

  result$ = this.service.result$;

  add() {
    this.service.add();
  }
}
