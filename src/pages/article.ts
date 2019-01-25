import fetch from 'universal-fetch';
import { getRequestUrl } from '../app/utils/api';

export default [
  {
    path: '/article/:articleId',
    exact: true,
    layout: import('../app/component/layout'),
    loadData: async ({ match, updateSeo }) => {
      const requestUrl = getRequestUrl(`articles/${match.params.articleId}`);
      return fetch(requestUrl)
        .then(res => res.json())
        .then((article) => {
          updateSeo({
            title: article.title,
            description: article.paragraphs.map(p => p.map(sentence => sentence.body).join(' ')).join(' '),
            image: article.image_url,
          });
          return article;
        })
    },
    component: import('../app/component/article/article'),
  },
];