import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { add } from './store/calculation-actions';
import {
  CalculationStateRoot,
  selectCalculationResult,
} from './store/calculation-selectors';
import { Debug } from '../debug';

@Component({
  selector: 'app-ngrx-calculator',
  templateUrl: './ngrx-calculator.component.html',
  styleUrls: ['./ngrx-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxCalculatorComponent extends Debug {
  constructor(private store: Store<CalculationStateRoot>) {
    super();
  }

  result$ = this.store.select(selectCalculationResult);

  add() {
    this.store.dispatch(add({ value: 1 }));
  }
}
