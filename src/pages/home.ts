import { getRequestUrl } from '../app/utils/search-utils';

export default [
  {
    path: '/',
    exact: true,
    layout: import('../app/component/layout'),
    loadData: async () => {
      const requestUrl = getRequestUrl('/articles', {
        display_respected_comment: 0,
        limit: 9,
        offset: 0,
        sort: 'created',
      });
      return fetch(requestUrl)
        .then(r => r.json());
    },
    component: import('../app/component/home'),
  }
];