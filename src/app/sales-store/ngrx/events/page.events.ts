import { props, createAction } from '@ngrx/store';

export const homePageEvents = {
  login: createAction(
    '[HomePage] login',
    props<{ userName: string; password: string }>()
  ),
  logout: createAction('[HomePage] logout'),
};
