import { createAction } from '@ngrx/store';

export const sessionEvents = {
  expired: createAction('[session] expired'),
  refreshed: createAction('[session] refreshed'),
};
