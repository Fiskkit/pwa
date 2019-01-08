// eslint-disable-next-line
import React from 'react';
import Home from './app/component/home';
import Article from './app/component/article';
import Layout from './app/component/layout';
import ShareImg72 from "../../fiskkit/src/resources/img/icon-72x72.png";
import ShareImg96 from "../../fiskkit/src/resources/img/icon-96x96.png";
import ShareImg128 from "../../fiskkit/src/resources/img/icon-128x128.png";
import ShareImg144 from "../../fiskkit/src/resources/img/icon-144x144.png";
import ShareImg152 from "../../fiskkit/src/resources/img/icon-152x152.png";
import ShareImg192 from "../../fiskkit/src/resources/img/icon-192x192.png";
import ShareImg384 from "../../fiskkit/src/resources/img/icon-384x384.png";
import ShareImg512 from "../../fiskkit/src/resources/img/icon-512x512.png";

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
          {
            src: ShareImg72,
            sizes: '72x72',
          },
          {
            src: ShareImg96,
            sizes: '96x96',
          },
          {
            src: ShareImg128,
            sizes: '128x128',
          },
          {
            src: ShareImg144,
            sizes: '144x144',
          },
          {
            src: ShareImg152,
            sizes: '152x152',
          },
          {
            src: ShareImg192,
            sizes: '192x192',
          },
          {
            src: ShareImg384,
            sizes: '384x384',
          },
          {
            src: ShareImg512,
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
        site_name: 'fiskkit.com',
        image: ShareImg512,
        meta: [
          {
            name: 'author',
            content: '',
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
