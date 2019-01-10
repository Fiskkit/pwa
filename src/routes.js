// eslint-disable-next-line
import React from 'react';
import fetch from 'universal-fetch';

// Local imports
import Home from './app/component/home';
import Article from './app/component/article';
import Layout from './app/component/layout';
import ArticlesSkeleton from './app/component/articles-skeleton';
import { getRequestUrl } from './app/utils/search-utils';

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
      {
        path: '/',
        exact: true,
        layout: Layout,
        loadData: async () => new Promise(resolve => {
          const requestUrl = getRequestUrl('/articles', {
            display_respected_comment: 0,
            limit: 9,
            offset: 0,
            sort: 'created',
          });
          fetch(requestUrl, {
            'content-type': 'application/json',
            'cache-control': 'no-cache',
          })
            .then(res => res.json())
            .then((response) => {
              resolve(response);
            })
            .catch(err => console.log('err', err));
        }),
        skeleton: ArticlesSkeleton,
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
      routeHandler.setPwaSchema({
        name: 'Fiskkit',
        short_name: 'Fiskkit',
        dir: 'ltr',
        lang: 'en-US',
        orientation: 'any',
        start_url: '',
        background_color: '#111',
        theme_color: '#111',
        display: 'standalone',
        description: 'A better way to discuss the news',
        icons: [
        ],
      });
      // // eslint-disable-next-line
      // routeHandler.getDefaultSeoSchema = () => ({
      //   title: 'Fiskkit',
      //   name: 'Fiskkit',
      //   description: 'A better way to discuss the news',
      //   type: 'website',
      //   url: 'http://fiskkit.com/',
      //   site_name: 'fiskkit.com',
      //   meta: [
      //     {
      //       name: 'author',
      //       content: '',
      //     },
      //     {
      //       name: 'description',
      //       content: 'A better way to discuss the news',
      //     },
      //     {
      //       name: 'theme-color',
      //       content: '#111',
      //     },
      //     {
      //       name: 'apple-mobile-web-app-status-bar-style',
      //       content: '#111',
      //     },
      //     {
      //       name: 'msapplication-TileColor',
      //       content: '#111',
      //     },
      //     {
      //       name: 'application-name',
      //       content: 'Fiskkit',
      //     },
      //     {
      //       name: 'generator',
      //       content: 'Fiskkit',
      //     },
      //     {
      //       name: 'apple-mobile-web-app-title',
      //       content: 'Fiskkit',
      //     },
      //   ],
      // });
    });
  }
}
