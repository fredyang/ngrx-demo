import { Component } from '@angular/core';
import { SingletonService } from './singleton.service';
import { DoubletonService } from './doubleton.service';

@Component({
  selector: 'app-demo-feature',
  template: `
    <h2>feature component</h2>
    <h2>singleton service id: {{ singletonService.id }}</h2>
    <h2>doubleton service id: {{ doubletonService.id }}</h2>
  `,
  styles: [],
})
export class FeatureComponent {
  constructor(
    public singletonService: SingletonService,
    public doubletonService: DoubletonService
  ) {}
}
