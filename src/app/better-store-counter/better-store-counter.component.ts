import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Debug } from '../debug';
import { selectBetterCounterResult } from './store/better-counter-selectors';
import { addButtonClicked } from './better-store-counter.actions';

@Component({
  selector: 'app-better-store-counter',
  template: `
    {{ logId() }}
    <h1>better-Store counter: {{ id }}</h1>
    <h2>Result: {{ result$ | async }}</h2>
    <button (click)="add()">Add</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BetterStoreCounterComponent extends Debug {
  constructor(private store: Store) {
    super();
  }

  result$ = this.store.select(selectBetterCounterResult);

  add() {
    this.store.dispatch(addButtonClicked({ value: 1 }));
  }
}
