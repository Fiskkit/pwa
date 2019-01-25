import React from 'react';
import FavIcon from './resources/images/icons/favicon.png';


export default class Server {
  apply = (serverHandler) => {

    serverHandler.hooks.beforeHtmlRender.tap('AddFavIcon', (Application) => {
      Application.htmlProps.head.push(
        <link key="favicon" rel="shortcut icon" type="image/x-icon" href={FavIcon} />,
      );
      return Application;
    });
  }
}
