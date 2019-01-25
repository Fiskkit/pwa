import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import DefaultImg from '../../../resources/images/fiskkit-red-black-logo.png';

export default (props: IArticleProps) => {
  const { 
    article: { 
      author,
      title,
      created_at,
      fisk_count,
      share_count,
      image_url,
      publisher,
      read_mins,
      id,
    }
  } = props;

  return (
    <div className="col col-lg-3 col-md-6">
      <div className="card">
        <div className="card-body">
          <div
            className="card-img"
            style={{ backgroundImage: `url(${DefaultImg})` }}
          >
            <div
              className="bg-img"
              style={{ backgroundImage: `url(${image_url})` }}
            />
          </div>
          <div className="card-content">
            <h4 className="card-title">
              <Link to={`/article/${id}`}>
                {title}
              </Link>
            </h4>
            <div className="details">
              <div className="author-name float-left">
                {
                  Boolean(author) && (
                    <span>
                      By&nbsp;{author}
                    </span>
                  )
                }
                <span>
                  {publisher}
                </span>
              </div>
              <div className="float-right">
                {
                  !!read_mins
                  && (
                    <span className="time">
                      {read_mins}&nbsp;min read
                    </span>
                  )
                }
              </div>
            </div>
            <div className="share-details">
              <div className="float-left">
                <span className="date">
                  {created_at ? moment(created_at).format('MMMM DD, YYYY') : '-'}
                </span>
              </div>
              <div className="float-right">
                <a href="#" className="icon">
                  <span className="round-icon">
                    <i className="fa fa-pencil" />
                  </span>
                  <span className="count" style={{ marginLeft: '4px' }}>
                    {fisk_count}
                  </span>
                </a>
                <a href="#" className="icon">
                  <span className="round-icon">
                    <i className="fa fa-share" />
                  </span>
                  <span className="count" style={{ marginLeft: '4px' }}>
                    {share_count}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
