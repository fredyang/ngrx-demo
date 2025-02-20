import { createActionGroup, props } from '@ngrx/store';
import { UserInfo } from '../../sales-share/model';

export const apiEvents = createActionGroup({
  source: 'Api',
  events: {
    'login Success': props<UserInfo>(),
    'order loaded': props<{ orders: string[] }>(),
    'preferences loaded': props<{ preferences: string[] }>(),
  },
});
