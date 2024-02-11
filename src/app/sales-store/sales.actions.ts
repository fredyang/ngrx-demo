import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserInfo } from '../sales-share/model';

export const homePageEvents = createActionGroup({
  source: 'Sales Home Page',
  events: {
    'log in': props<{ userName: string; password: string }>(),
    'log out': emptyProps(),
  },
});

export const apiEvents = createActionGroup({
  source: 'Api',
  events: {
    'login Success': props<UserInfo>(),
    'order loaded': props<{ orders: string[] }>(),
    'preferences loaded': props<{ preferences: string[] }>(),
  },
});

export const systemEvents = createActionGroup({
  source: 'System',
  events: {
    'session timeout': emptyProps(),
    'session renewed': emptyProps(),
  },
});
