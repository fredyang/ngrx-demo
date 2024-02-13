import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { antiPatternActions, antiPatternFeature1 } from './store';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

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
export class AntiPattern1Component implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private store: Store) {
    // when input change, save it to token slot in store
    this.txtToken.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((token) => {
        this.store.dispatch(antiPatternActions.tokenUpdated({ token }));
      });

    // when token slot change, trigger to side effect to validate it
    this.store
      .select(antiPatternFeature1.selectToken)
      .pipe(takeUntil(this.destroy$))
      .subscribe((token) => {
        this.store.dispatch(antiPatternActions.validate({ token }));
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  txtToken = new FormControl();

  // subscribe isValid slot in store
  isValid$ = this.store.select(antiPatternFeature1.selectIsValid);
}
