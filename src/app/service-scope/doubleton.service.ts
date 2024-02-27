import { Injectable } from '@angular/core';

@Injectable()
export class DoubletonService {
  id = 'doubleton-' + Math.trunc(Math.random() * 10000);
}
