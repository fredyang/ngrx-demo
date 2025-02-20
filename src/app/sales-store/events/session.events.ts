import { createActionGroup, emptyProps } from '@ngrx/store';

export const sessionEvents = createActionGroup({
  source: 'Session',
  events: {
    timeout: emptyProps(),
    renewed: emptyProps(),
  },
});
