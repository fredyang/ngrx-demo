import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class XApi {
  validate(token: string) {
    return of(token === 'super');
  }
}
