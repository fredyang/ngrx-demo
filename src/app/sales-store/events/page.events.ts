import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const homePageEvents = createActionGroup({
  source: 'HomePage',
  events: {
    'want to login': props<{ userName: string; password: string }>(),
    'want to logout': emptyProps(),
  },
});

// homePageEvents.wantToLogin({ userName: 'user', password: 'pass' });
