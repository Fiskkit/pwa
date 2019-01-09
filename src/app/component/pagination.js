/**
* Created by ankushtiwari on 8/1/19.
*/
import React from 'react';
import _ from 'lodash';
// eslint-disable-next-line
import { PropTypes } from 'prop-types';


// eslint-disable-next-line
export default class Pagination extends React.Component {
  static propTypes = {
    meta: PropTypes.shape({}).isRequired,
    searchParams: PropTypes.shape({}).isRequired,
    updateSearchParams: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { searchParams, meta } = this.props;
    this.state = {
      totalPages: _.toNumber(_.get(meta, 'count', 0)) / _.toNumber(_.get(searchParams, 'limit', 1)),
    };
  }

  render() {
    const { searchParams, updateSearchParams } = this.props;
    const { totalPages } = this.state;
    const currentOffset = _.toNumber(_.get(searchParams, 'offset', 0));
    const currentPage = (currentOffset / 9) + 1;

    return (
      <div className="pagination">
        <a href="#" className="disabled prev">
          <i className="fa fa-angle-left" />
        </a>
        <ul>
          {
            currentPage > 2
            && (
              <li className={currentPage === 1 ? 'current' : ''}>
                <a
                  href="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                    updateSearchParams(_.assignIn({}, searchParams, {
                      offset: 0,
                    }));
                  }}
                >
                  1
                </a>
              </li>
            )
          }
          {
            currentPage > 3
            && (
              <li>...</li>
            )
          }

          {
            currentPage > 1
            && (
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                    updateSearchParams(_.assignIn({}, searchParams, {
                      offset: currentOffset - 9,
                    }));
                  }}
                >
                  {currentPage - 1}
                </a>
              </li>
            )
          }

          {
            totalPages > 0
            && (
              <li className="current">
                <a
                  href="#"
                  onClick={() => false}
                >
                  {currentPage}
                </a>
              </li>
            )
          }
          {
            totalPages > currentPage
            && (
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                    updateSearchParams(_.assignIn({}, searchParams, {
                      offset: currentOffset + 9,
                    }));
                  }}
                >
                  {currentPage + 1}
                </a>
              </li>
            )
          }
          {
            currentPage < totalPages - 2
            && (
              <li>...</li>
            )
          }
          {
            currentPage < totalPages - 1
            && (

              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                    updateSearchParams(_.assignIn({}, searchParams, {
                      offset: (totalPages - 1) * 9,
                    }));
                  }}
                >
                  {totalPages}
                </a>
              </li>
            )
          }
        </ul>
        <a href="#" className="next">
          <i className="fa fa-angle-right" />
        </a>
      </div>
    );
  }
}
