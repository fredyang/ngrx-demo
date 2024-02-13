import { ChangeDetectionStrategy, Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { XApi } from './x-api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-anti-pattern1-fix',
  template: `
    <div>
      <h1>fix for anti pattern: use store for temporary value</h1>
      <p>token: <input [formControl]="txtToken" /> (valid value is 'super')</p>
      <p>isValid: {{ isValid$ | async }}</p>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AntiPattern1FixComponent {
  constructor(private api: XApi) {}
  txtToken = new FormControl();
  isValid$ = this.txtToken.valueChanges.pipe(
    switchMap((value) => this.api.validate(value))
  );
}
