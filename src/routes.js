import React from 'react';
import Home from './app/component/home.js';
import './webpack.js';
import { Link } from 'react-router-dom';


export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
      {
        path: '/', exact: true, component: Home,
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
