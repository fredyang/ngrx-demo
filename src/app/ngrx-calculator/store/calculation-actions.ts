import { createAction, props } from '@ngrx/store';

export const add = createAction('[math] - add', props<{ value: number }>());
