import { createAction, props } from '@ngrx/store';

export const addButtonClicked = createAction(
  '[better counter component] - add button clicked',
  props<{ value: number }>()
);
