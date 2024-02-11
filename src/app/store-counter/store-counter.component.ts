import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Debug } from '../debug';
import { actionAdd } from './store/counter-actions';
import { selectCounterResult } from './store/counter-selectors';

@Component({
  selector: 'app-store-counter',
  template: `
    {{ logId() }}
    <h1>Store counter: {{ id }}</h1>
    <h2>Result: {{ result$ | async }}</h2>
    <button (click)="add()">Add</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreCounterComponent extends Debug {
  constructor(private store: Store) {
    super();
  }

  result$ = this.store.select(selectCounterResult);

  add() {
    this.store.dispatch(actionAdd({ value: 1 }));
  }
}
