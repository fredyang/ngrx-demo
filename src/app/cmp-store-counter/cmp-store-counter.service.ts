import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface CmpStoreCounter {
  result: number;
}

@Injectable({
  providedIn: 'root',
})
export class CmpStoreCounterService extends ComponentStore<CmpStoreCounter> {
  constructor() {
    super({ result: 0 });
  }

  result$ = this.select((state) => state.result);

  add = this.updater((state) => ({ ...state, result: state.result + 1 }));
}
