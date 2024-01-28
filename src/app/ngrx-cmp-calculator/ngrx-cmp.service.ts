import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface NgrxCmpCalcuator {
  result: number;
}

@Injectable({
  providedIn: 'root',
})
export class NgrxCmpStore extends ComponentStore<NgrxCmpCalcuator> {
  constructor() {
    super({ result: 0 });
  }

  result$ = this.select((state) => state.result);

  add = this.updater((state) => {
    const result = state.result + 1;
    return { ...state, result };
  });
}
