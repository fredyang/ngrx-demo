import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserInfo } from './model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  login(userName: string, password: string) {
    return of({ firstName: 'John', lastName: 'Doe', userName } as UserInfo);
  }

  getUserOrders(userName: string) {
    return of(['order1', 'order2']);
  }

  getPreferences(userName: string) {
    return of(['Apple', 'Banana', 'Mango']);
  }
}
