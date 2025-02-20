import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/user', (resolver) => {
    return HttpResponse.json({
      first: 'John',
      last: 'Maverick',
    });
  }),
];
