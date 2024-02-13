import { Injectable } from '@angular/core';
import { Actions, EffectsModule, createEffect, ofType } from '@ngrx/effects';
import {
  Store,
  StoreModule,
  createActionGroup,
  createFeature,
  createReducer,
  on,
  props,
} from '@ngrx/store';
import { concatMap, map } from 'rxjs';
import { XApi } from './x-api.service';

export const antiPatternActions = createActionGroup({
  source: 'anti pattern',
  events: {
    'token updated': props<{ token: string }>(),
    validate: props<{ token: string }>(),
    'validate success': props<{ isValid: boolean }>(),
  },
});

export const antiPatternFeature1 = createFeature({
  name: 'antiPattern',
  reducer: createReducer(
    {
      token: '',
      isValid: false,
    },
    on(antiPatternActions.tokenUpdated, (state, { token }) => {
      return { ...state, token };
    }),
    on(antiPatternActions.validateSuccess, (state, { isValid }) => {
      return { ...state, isValid };
    })
  ),
});

@Injectable({
  providedIn: 'root',
})
export class AntiPatternEffects {
  constructor(private actions$: Actions, private api: XApi) {}

  validate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(antiPatternActions.validate),
      concatMap(({ token }) => {
        return this.api.validate(token);
      }),
      map((result) => {
        return antiPatternActions.validateSuccess({ isValid: result });
      })
    )
  );
}

export const antiPatternModule1 = [
  StoreModule.forFeature(antiPatternFeature1),
  EffectsModule.forFeature(AntiPatternEffects),
];
