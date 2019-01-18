import Config from '../../config/config';

export const getRequestUrl = (url = '/articles', queryParams) => {
  const trimmedQueryObj = _.pickBy(queryParams, (p) => {
    return !_.isEmpty(p) || _.isNumber(p);
  });

  const query = _.map(trimmedQueryObj, (v, k) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');

  return `${Config.apiUrl}${url}?${query}`;
};

export const sortTypes = {
  recent: 'created',
  mostFisked: 'fisk_count',
};

export default {
  getRequestUrl,
  sortTypes,
};
