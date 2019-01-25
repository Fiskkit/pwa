import config from '../../config';
import fetch from 'universal-fetch';

export const getRequestUrl = (url:string = '/articles'): string => {
  let apiUrl = config.apiUrl;
  // Append / to api URL
  if (!apiUrl.endsWith('/')) {
    apiUrl += '/';
  }
  // Remove starting / specified by user
  if (url.startsWith('/')) {
    url = url.substr(1);
  }
  return `${apiUrl}${url}`;
};

const requestArticles = async (
  page: number = 1,
  perPage: number = 12,
  sortBy: string = 'created_at',
  lastXHours: number | null  = null
) => {

  const articlesUrl = getRequestUrl('articles');
  const queryParams = {
    page,
    perPage,
    sortBy,
    ...(lastXHours ? {lastXHours}: {}),
  };
  const queryString = Object.keys(queryParams).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(queryParams[k])).join('&');

  return await fetch(`${articlesUrl}?${queryString}`).then(r => r.json());
};

export const requestMostFiskedArticles = async (page: number = 1, perPage: number = 12) => {
  return await requestArticles(page, perPage, 'fisk_count');
};

export const requestRecentArticles = async (page:number = 1, perPage: number = 12) => {
  return await requestArticles(page, perPage, 'created_at');
};