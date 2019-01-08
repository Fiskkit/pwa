/**
 * Created by ankushtiwari on 2/1/19.
 */
import _ from 'lodash';
import Config from '../../config/config';

export const getRequestUrl = (url = '/articles', queryParams) => {
  const trimmedQueryObj = _.pickBy(queryParams, (p) => {
    return !_.isEmpty(p) || _.isNumber(p);
  });

  const query = _.map(trimmedQueryObj, (v, k) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');

  return `${Config.apiUrl}${url}?${query}`;
};


export default {
  getRequestUrl,
};
