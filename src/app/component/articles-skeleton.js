import React from 'react';
import { sortTypes } from '../utils/search-utils';
// eslint-disable-next-line
import { PropTypes } from 'prop-types';


const renderFiskBlocks = () => {
  const fiskBLocks = [];
  for (let i = 0; i < 9; i++) {
    fiskBLocks.push(
      (
        <div key={`skeleton_${i}`} className="col col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="card-img">
                <div
                  className="bg-img"
                />
              </div>
              <div className="card-content">
                <h4 className="card-title">
                </h4>
                <div className="details">
                  <div className="float-left">
                  <span>
                  </span>
                    <span>
                  </span>
                  </div>
                  <div className="float-right">
                  <span className="time">
                  </span>
                  </div>
                </div>
                <div className="share-details">
                  <div className="float-left">
                  <span className="date">
                  </span>
                  </div>
                  <div className="float-right">
                    <a href="#" className="icon">
                    <span className="round-icon">
                      <i className="fa fa-pencil" />
                    </span>
                      <span className="count" style={{ marginLeft: '4px' }}>
                    </span>
                    </a>
                    <a href="#" className="icon">
                    <span className="round-icon">
                      <i className="fa fa-share" />
                    </span>
                      <span className="count" style={{ marginLeft: '4px' }}>
                    </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    );
  }

  return fiskBLocks;
};

// eslint-disable-next-line
const ArticlesSkeleton = (sort) => {
  return (
    <React.Fragment>
      <div className="sorting-tabs">
        <ul>
          <li className={sort === sortTypes.recent ? 'active' : ''}>
            <a
              href="#"
              className="tab"
              onClick={(e) => {
                if (e && e.preventDefault) e.preventDefault();
              }}
            >
              Most Recent
            </a>
          </li>
          <li className={sort === sortTypes.mostFisked ? 'active' : ''}>
            <a
              href="#"
              className="tab"
              onClick={(e) => {
                if (e && e.preventDefault) e.preventDefault();
              }}
            >
              Most Fisked
            </a>
          </li>
        </ul>
      </div>
      <div className="article-section">
        <div className="row">
          {renderFiskBlocks()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ArticlesSkeleton;
