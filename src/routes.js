// eslint-disable-next-line
import React from 'react';
import Home from './app/component/home';
import Article from './app/component/article';
import Layout from './app/component/layout';

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
      {
        path: '/',
        exact: true,
        layout: Layout,
        component: Home,
      },
      {
        path: '/article/:articleId',
        exact: true,
        layout: Layout,
        component: Article,
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
