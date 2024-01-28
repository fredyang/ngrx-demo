import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleService } from './SimpleService';
import { Debug } from '../debug';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCalculatorComponent extends Debug {
  constructor(private simpleService: SimpleService) {
    super();
  }

  get result() {
    return this.simpleService.result;
  }

  add() {
    this.simpleService.add();
  }
}
