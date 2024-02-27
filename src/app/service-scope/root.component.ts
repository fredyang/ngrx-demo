import { Component } from '@angular/core';
import { SingletonService } from './singleton.service';
import { DoubletonService } from './doubleton.service';

@Component({
  selector: 'app-demo-root',
  template: `
    <h1>root Component</h1>
    <h1>singleton service id: {{ singleton.id }}</h1>
    <h1>doubleton service id: {{ doubletonService.id }}</h1>
    <h1><a routerLink="feature">feature</a></h1>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class RootComponent {
  constructor(
    public singleton: SingletonService,
    public doubletonService: DoubletonService
  ) {}
}
