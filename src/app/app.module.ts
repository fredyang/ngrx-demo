import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';
import { counterStoreModules } from './store-counter/counter-module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SimpleCounterDemoComponent } from './simple-counter/simple-counter-demo.component';
import { BehaviorSubjectCounterComponent } from './behavior-subject-counter/behavior-subject-counter.component';
import { BehaviorSubjectCounterDemoComponent } from './behavior-subject-counter/behavior-subject-counter-demo.component';
import { MenuComponent } from './menu.component';
import { StoreCounterComponent } from './store-counter/store-counter.component';
import { CmpStoreCounterDemoComponent } from './cmp-store-counter/cmp-store-counter-demo.component';
import { CmpStoreCounterComponent } from './cmp-store-counter/cmp-store-counter.component';
import { StoreCounterDemoComponent } from './store-counter/store-counter-demo.component';
import { betterCounterStoreModules } from './better-store-counter/better-counter-module';
import { BetterStoreCounterComponent } from './better-store-counter/better-store-counter.component';
import { BetterStoreCounterDemoComponent } from './better-store-counter/better-store-counter-demo.component';
import { SalesStoreComponent } from './sales-store/sales-store.component';
import { salesStoreModules } from './sales-store/sales.slot';
import { SalesCmpStoreComponent } from './sales-cmp-store/sales-cmp-store.component';
import { BehaviorSubjectCounterWithBugComponent } from './behavior-subject-counter-with-bug/behavior-subject-counter-with-bug.component';
import { BehaviorSubjectCounterWithBugDemoComponent } from './behavior-subject-counter-with-bug/behavior-subject-counter-demo.component';
import { AntiPattern1Component } from './ngrx-anti-pattern1/anti-pattern1.component';
import { antiPatternModule1 } from './ngrx-anti-pattern1/store';
import { AntiPattern1FixComponent } from './ngrx-anti-pattern1/anti-pattern1-fix.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RootComponent } from './service-scope/root.component';
import { DoubletonService } from './service-scope/doubleton.service';
import { SingletonService } from './service-scope/singleton.service';
@NgModule({
  declarations: [
    AppComponent,
    SimpleCounterComponent,
    SimpleCounterDemoComponent,
    BehaviorSubjectCounterComponent,
    BehaviorSubjectCounterDemoComponent,
    BehaviorSubjectCounterWithBugComponent,
    BehaviorSubjectCounterWithBugDemoComponent,
    MenuComponent,
    StoreCounterComponent,
    CmpStoreCounterDemoComponent,
    CmpStoreCounterComponent,
    StoreCounterDemoComponent,
    BetterStoreCounterComponent,
    BetterStoreCounterDemoComponent,
    SalesStoreComponent,
    SalesCmpStoreComponent,
    AntiPattern1Component,
    AntiPattern1FixComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    counterStoreModules,
    betterCounterStoreModules,
    salesStoreModules,
    antiPatternModule1,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [SingletonService, DoubletonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
