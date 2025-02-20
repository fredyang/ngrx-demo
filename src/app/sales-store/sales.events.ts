import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserInfo } from '../sales-share/model';

// events(actions) is used everywhere in the app
// view trigger events
// reducer, effect respond to events

export const homePageEvents = createActionGroup({
  source: 'HomePage',
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

export const sessionEvents = createActionGroup({
  source: 'Session',
  events: {
    timeout: emptyProps(),
    renewed: emptyProps(),
  },
});
