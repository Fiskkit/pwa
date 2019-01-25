import HomeRoutes from './pages/home.ts';
import ArticleRoutes from './pages/article.ts';

// Icons for Fiskkit PWA
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
  description = 'The term fisking was born during the early 2000s when bloggers began reposting articles and then tearing them to shreds - sentence by sentence - from The Independent\'s Robert Fisk, whose views were highly critical of the Bush Administration\'s policies in Iraq. The Guardian aptly defined it as "the practice of savaging an argument and scattering the tattered remnants to the four corners of the internet."';

  apply(routeHandler) {
    routeHandler.setPwaSchema({
      name: 'Fiskkit - A better way to discuss the news',
      short_name: 'Fiskkit',
      dir: 'ltr',
      lang: 'en-US',
      orientation: 'any',
      start_url: '/',
      background_color: '#111',
      theme_color: '#111',
      display: 'standalone',
      description: this.description,
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

    routeHandler.setDefaultSeoSchema({
      title: 'Fiskkit - A better way to discuss the news',
      name: 'Fiskkit',
      description: this.description,
      type: 'website',
      site_name: 'fiskkit',
      image: Logo,
      meta: [
        {
          name: 'author',
          content: 'John Pettus',
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
          content: 'PawJS',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'Fiskkit',
        },
      ],
    });

    routeHandler.hooks.initRoutes.tapPromise('AddAppRoutes', async () => routeHandler.addRoutes([
      ...HomeRoutes,
      ...ArticleRoutes,
    ]));
  }
}
