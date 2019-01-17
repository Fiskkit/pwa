// eslint-disable-next-line
import React from 'react';
import fetch from 'universal-fetch';
import _ from 'lodash';

// Local imports
import Config from './config/config';
import Home from './app/component/home';
import Article from './app/component/article';
import Layout from './app/component/layout';
import ArticlesSkeleton from './app/component/articles-skeleton';
import { getRequestUrl } from './app/utils/search-utils';


// Images
import Logo from './resources/images/icons/fiskit_share_image.png';
import Logo72 from './resources/images/icons/fiskkit-72x72.jpg';
import Logo96 from './resources/images/icons/fiskkit-96x96.png';
import Logo128 from './resources/images/icons/fiskkit-128x128.png';
import Logo144 from './resources/images/icons/fiskkit-144x144.png';
import Logo152 from './resources/images/icons/fiskkit-152x152.png';
import Logo192 from './resources/images/icons/fiskkit-192x192.png';
import Logo384 from './resources/images/icons/fiskkit-384x384.png';
import Logo512 from './resources/images/icons/fiskkit-512x512.png';
import Logo1024 from './resources/images/icons/fiskkit-1024x1024.png';

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
      {
        path: '/',
        exact: true,
        layout: Layout,
        loadData: async () => new Promise((resolve) => {
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
        loadData: async ({ match, updateSeo }) => new Promise((resolve) => {
          const requestUrl = `${Config.apiUrl}/articles/${_.get(match, 'params.articleId', '')}`;
          fetch(requestUrl, {
            'content-type': 'application/json',
            'cache-control': 'no-cache',
          })
            .then(res => res.json())
            .then((response) => {
              const article = _.get(response, 'article', '');

              updateSeo({
                title: _.get(article, 'title', ''),
                description: _.map(_.get(article, 'paragraphs', []), p => _.map(p, sentence => _.get(sentence, 'body', '')).join('')).join(''),
                image: _.get(article, 'image_url', ''),
              });
              resolve(response);
            })
            .catch(err => console.log('err', err));
        }),
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
        description: 'The term fisking was born during the early 2000s when bloggers began reposting articles and then tearing them to shreds - sentence by sentence - from The Independent\'s Robert Fisk, whose views were highly critical of the Bush Administration\'s policies in Iraq. The Guardian aptly defined it as "the practice of savaging an argument and scattering the tattered remnants to the four corners of the internet."',
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
          {
            src: Logo1024,
            sizes: '1024x1024',
          },
        ],
      });
      // eslint-disable-next-line
      routeHandler.getDefaultSeoSchema = () => ({
        title: 'Fiskkit - A better way to discuss the news',
        name: 'Fiskkit',
        description: 'The term fisking was born during the early 2000s when bloggers began reposting articles and then tearing them to shreds - sentence by sentence - from The Independent\'s Robert Fisk, whose views were highly critical of the Bush Administration\'s policies in Iraq. The Guardian aptly defined it as "the practice of savaging an argument and scattering the tattered remnants to the four corners of the internet."',
        type: 'website',
        // url: 'https://vestra.serveo.net/',
        site_name: 'fiskkit',
        image: Logo,
        meta: [
          {
            name: 'author',
            content: 'Vishal',
          },
          {
            name: 'description',
            content: '',
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
