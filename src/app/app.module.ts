import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NgrxCalculatorComponent } from './ngrx-calculator/ngrx-calculator.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { RxjsCalculatorComponent } from './rxjs-calculator/rxjs-calculator.component';
import { calculationModules } from './ngrx-calculator/store/calculation-module';
import { EffectsModule } from '@ngrx/effects';
import { NgrxCmpCalculatorComponent } from './ngrx-cmp-calculator/ngrx-cmp-calculator.component';
import { NgrxCmpLocalCalculatorComponent } from './ngrx-cmp-local-calculator/ngrx-cmp-local-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NgrxCalculatorComponent,
    SimpleCalculatorComponent,
    RxjsCalculatorComponent,
    NgrxCmpCalculatorComponent,
    NgrxCmpLocalCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    calculationModules,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
