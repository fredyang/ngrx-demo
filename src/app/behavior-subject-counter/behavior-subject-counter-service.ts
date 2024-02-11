import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorCounterService {
  private subject = new BehaviorSubject(0);

  result$ = this.subject.asObservable();

  add() {
    this.subject.next(this.subject.value + 1);
  }
}
