import { createAction, props } from '@ngrx/store';
import { UserInfo } from '../../sales-share/model';

export const apiEvents = {
  loginSuccess: createAction('[Api] loginSuccess', props<UserInfo>()),
  orderLoaded: createAction('[Api] orderLoaded', props<{ orders: string[] }>()),
  preferencesLoaded: createAction(
    '[Api] preferencesLoaded',
    props<{ preferences: string[] }>()
  ),
};
