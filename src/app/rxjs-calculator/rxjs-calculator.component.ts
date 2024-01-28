import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RxjsService } from './RxjsService';
import { Debug } from '../debug';

@Component({
  selector: 'app-rxjs-calculator',
  templateUrl: './rxjs-calculator.component.html',
  styleUrls: ['./rxjs-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsCalculatorComponent extends Debug {
  constructor(private rxjsService: RxjsService) {
    super();
  }

  result$ = this.rxjsService.result$;

  add() {
    this.rxjsService.add();
  }
}
