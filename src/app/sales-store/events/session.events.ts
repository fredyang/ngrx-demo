import { createAction } from '@ngrx/store';

export const sessionEvents = {
  expired: createAction('[session] expired'),
  renewed: createAction('[session] renewed'),
};
