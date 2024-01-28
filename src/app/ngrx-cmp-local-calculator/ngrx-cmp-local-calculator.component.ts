import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgrxLocalCmpStore } from './ngrx-cmp-local.service';
import { Debug } from '../debug';

@Component({
  selector: 'app-ngrx-cmp-local-calculator',
  templateUrl: './ngrx-cmp-local-calculator.component.html',
  styleUrls: ['./ngrx-cmp-local-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgrxLocalCmpStore],
})
export class NgrxCmpLocalCalculatorComponent extends Debug {
  constructor(private store: NgrxLocalCmpStore) {
    super();
  }

  result$ = this.store.result$;

  add() {
    this.store.add();
  }
}
