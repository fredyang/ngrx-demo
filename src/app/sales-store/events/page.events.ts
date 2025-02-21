import { props, createAction } from '@ngrx/store';

export const homePageEvents = {
  wantToLogin: createAction(
    '[HomePage] wantToLogin',
    props<{ userName: string; password: string }>()
  ),
  wantToLogout: createAction('[HomePage] wantToLogout'),
};
