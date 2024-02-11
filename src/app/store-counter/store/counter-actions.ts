import { createAction, props } from '@ngrx/store';

export const actionAdd = createAction(
  '[counter] - add',
  props<{ value: number }>()
);
