import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { antiPatternActions, antiPatternFeature1 } from './store';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-anti-pattern1',
  template: `
    <div>
      <h1>anti pattern: use store for temporary value</h1>
      <p>token: <input [formControl]="txtToken" /> (valid value is 'super')</p>

      <p>isValid: {{ isValid$ | async }}</p>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AntiPattern1Component {
  constructor(private store: Store) {
    this.txtToken.valueChanges.subscribe((token) => {
      this.store.dispatch(antiPatternActions.tokenUpdated({ token }));
    });

    this.store.select(antiPatternFeature1.selectToken).subscribe((token) => {
      this.store.dispatch(antiPatternActions.validate({ token }));
    });
  }

  txtToken = new FormControl();

  isValid$ = this.store.select(antiPatternFeature1.selectIsValid);
}
