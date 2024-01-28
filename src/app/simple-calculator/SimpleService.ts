import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleService {
  get result() {
    return this._result;
  }

  private _result = 0;

  add() {
    this._result++;
  }
}
