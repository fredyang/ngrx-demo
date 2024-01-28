import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgrxCmpStore } from './ngrx-cmp.service';
import { Debug } from '../debug';

@Component({
  selector: 'app-ngrx-cmp-calculator',
  templateUrl: './ngrx-cmp-calculator.component.html',
  styleUrls: ['./ngrx-cmp-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxCmpCalculatorComponent extends Debug {
  constructor(private store: NgrxCmpStore) {
    super();
  }

  result$ = this.store.result$;

  add() {
    this.store.add();
  }
}
