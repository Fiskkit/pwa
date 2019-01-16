// eslint-disable-next-line
import React from 'react';
import fetch from 'universal-fetch';

// Local imports
import Home from './app/component/home';
import Article from './app/component/article';
import Layout from './app/component/layout';
import ArticlesSkeleton from './app/component/articles-skeleton';
import { getRequestUrl } from './app/utils/search-utils';


// Images
import Logo from './resources/images/fiskkit-red-black-logo.png';
import Logo72 from './resources/images/icons/72x72.png';
import Logo96 from './resources/images/icons/96x96.png';
import Logo128 from './resources/images/icons/128x128.png';
import Logo144 from './resources/images/icons/144x144.png';
import Logo152 from './resources/images/icons/152x152.png';
import Logo192 from './resources/images/icons/192x192.png';
import Logo384 from './resources/images/icons/384x384.png';
import Logo512 from './resources/images/icons/512x512.png';

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
        start_url: '/',
        background_color: '#111',
        theme_color: '#111',
        display: 'standalone',
        description: 'A better way to discuss the news',
        icons: [
          {
            src: Logo72,
            sizes: '72x72',
          },
          {
            src: Logo96,
            sizes: '96x96',
          },
          {
            src: Logo128,
            sizes: '128x128',
          },
          {
            src: Logo144,
            sizes: '144x144',
          },
          {
            src: Logo152,
            sizes: '152x152',
          },
          {
            src: Logo192,
            sizes: '192x192',
          },
          {
            src: Logo384,
            sizes: '384x384',
          },
          {
            src: Logo512,
            sizes: '512x512',
          },
        ],
      });
      // eslint-disable-next-line
      routeHandler.getDefaultSeoSchema = () => ({
        title: 'Fiskkit',
        name: 'Fiskkit',
        description: 'A better way to discuss the news',
        type: 'website',
        url: 'http://fiskkit.com/',
        site_name: 'fiskkit',
        image: Logo,
        meta: [
          {
            name: 'author',
            content: 'Vishal',
          },
          {
            name: 'description',
            content: 'A better way to discuss the news',
          },
          {
            name: 'theme-color',
            content: '#111',
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#111',
          },
          {
            name: 'msapplication-TileColor',
            content: '#111',
          },
          {
            name: 'application-name',
            content: 'Fiskkit',
          },
          {
            name: 'generator',
            content: 'Fiskkit',
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Fiskkit',
          },
        ],
      });
    });
  }
}
