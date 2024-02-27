import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {
  id = 'single-' + Math.trunc(Math.random() * 10000);
}
