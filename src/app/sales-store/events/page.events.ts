import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const homePageEvents = createActionGroup({
  source: 'HomePage',
  events: {
    'log in': props<{ userName: string; password: string }>(),
    'log out': emptyProps(),
  },
});
