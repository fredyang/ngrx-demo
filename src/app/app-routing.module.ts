import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleCounterDemoComponent } from './simple-counter/simple-counter-demo.component';
import { BehaviorSubjectCounterDemoComponent } from './behavior-subject-counter/behavior-subject-counter-demo.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MenuComponent } from './menu.component';
import { CmpStoreCounterDemoComponent } from './cmp-store-counter/cmp-store-counter-demo.component';
import { StoreCounterDemoComponent } from './store-counter/store-counter-demo.component';
import { BetterStoreCounterDemoComponent } from './better-store-counter/better-store-counter-demo.component';
import { SalesStoreComponent } from './sales-store/sales-store.component';
import { SalesCmpStoreComponent } from './sales-cmp-store/sales-cmp-store.component';
import { BehaviorSubjectCounterWithBugDemoComponent } from './behavior-subject-counter-with-bug/behavior-subject-counter-demo.component';
import { AntiPattern1Component } from './ngrx-anti-pattern1/anti-pattern1.component';
import { AntiPattern1FixComponent } from './ngrx-anti-pattern1/anti-pattern1-fix.component';
import { RootComponent } from './service-scope/root.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'store',
    component: StoreCounterDemoComponent,
  },
  {
    path: 'better-store',
    component: BetterStoreCounterDemoComponent,
  },
  {
    path: 'component-store',
    component: CmpStoreCounterDemoComponent,
  },
  {
    path: 'simple',
    component: SimpleCounterDemoComponent,
  },
  {
    path: 'behavior-subject',
    component: BehaviorSubjectCounterDemoComponent,
  },
  {
    path: 'behavior-subject-with-bug',
    component: BehaviorSubjectCounterWithBugDemoComponent,
  },
  {
    path: 'sales',
    component: SalesStoreComponent,
  },
  {
    path: 'sales-cmp-store',
    component: SalesCmpStoreComponent,
  },
  {
    path: 'antipattern1',
    component: AntiPattern1Component,
  },
  {
    path: 'antipattern1-fix',
    component: AntiPattern1FixComponent,
  },
  {
    path: 'root-service',
    component: RootComponent,
    children: [
      {
        path: 'feature',
        loadChildren: () =>
          import('./service-scope/feature.module').then((m) => m.FeatureModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
