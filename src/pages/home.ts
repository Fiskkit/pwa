import fetch from 'universal-fetch';
import { requestRecentArticles } from '../app/utils/api';

export default [
  {
    path: '/',
    exact: true,
    layout: import('../app/component/layout'),
    loadData: async () => {
      return requestRecentArticles();
    },
    component: import('../app/component/home'),
  }
];