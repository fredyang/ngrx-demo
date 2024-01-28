import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxCalculatorComponent } from './ngrx-calculator/ngrx-calculator.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { RxjsCalculatorComponent } from './rxjs-calculator/rxjs-calculator.component';

const routes: Routes = [
  {
    path: 'ngrx',
    component: NgrxCalculatorComponent,
  },
  {
    path: 'simple',
    component: SimpleCalculatorComponent,
  },
  {
    path: 'rxjs',
    component: RxjsCalculatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
