/**
* Created by ankushtiwari on 8/1/19.
*/
import React from 'react';
import _ from 'lodash';
import moment from 'moment';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { PropTypes } from 'prop-types';

// eslint-disable-next-line
export default class FiskBlock extends React.Component {
  static propTypes = {
    article: PropTypes.shape({}).isRequired,
  };

  render() {
    const { article } = this.props;
    // console.log('article', article);
    const createdAt = _.get(article, 'created_at', '');
    return (
      <div className="col col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="card-img">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(${_.get(article, 'image_url', '')})` }}
              />
            </div>
            <div className="card-content">
              <h4 className="card-title">
                <Link to={`/article/${_.get(article, 'id', '')}`}>
                  {_.get(article, 'title', '')}
                </Link>
              </h4>
              <div className="details">
                <div className="float-left">
                  <span>
                    By&nbsp;
                    {_.get(article, 'author', '-')}
                  </span>
                  <span>
                    {_.get(article, 'publisher', '-')}
                  </span>
                </div>
                <div className="float-right">
                  <span className="time">
                    {_.get(article, 'read_mins', 0)}
                    &nbsp;min read
                  </span>
                </div>
              </div>
              <div className="share-details">
                <div className="float-left">
                  <span className="date">
                    {createdAt ? moment(createdAt).format('MMMM DD, YYYY') : '-'}
                  </span>
                </div>
                <div className="float-right">
                  <a href="#" className="icon">
                    <span className="round-icon">
                      <i className="fa fa-pencil" />
                    </span>
                    <span className="count">
                      {_.get(article, 'fisk_count', '')}
                    </span>
                  </a>
                  <a href="#" className="icon">
                    <span className="round-icon">
                      <i className="fa fa-share" />
                    </span>
                    <span className="count">
                      {_.get(article, 'share_count', '')}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
