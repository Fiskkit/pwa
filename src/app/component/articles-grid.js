import React from 'react';
import _ from 'lodash';

// Local imports
import FiskBlock from './fisk-block';
import Pagination from './pagination';
import { getRequestUrl } from '../utils/search-utils';

// Images
import RedLogo from '../../resources/images/fiskkit-red-black-logo.png';


const sortTypes = {
  recent: 'created',
  mostFisked: 'fisk_count',
};

// eslint-disable-next-line
export default class ArticlesGrid extends React.Component {

  constructor(props) {
    super(props);
    this.defaultSearchParams = {
      display_respected_comment: 0,
      limit: 9,
      offset: 0,
      sort: sortTypes.recent,
    };
    this.state = {
      loading: false,
      sort: sortTypes.recent,
      errorMsg: '',
      articles: _.get(this.props, 'loadedData.articles', []) || [],
      meta: _.get(this.props, 'loadedData.meta', {}) || {},
      searchParams: this.defaultSearchParams,
    };
  }

  componentDidMount() {
    // this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(_.get(prevState, 'searchParams', ''), _.get(this.state, 'searchParams', ''))
      || !_.isEqual(_.get(prevState, 'sort', ''), _.get(this.state, 'sort', ''))
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    const { searchParams, sort } = this.state;
    const requestUrl = getRequestUrl('/articles', _.assignIn({}, searchParams, {
      sort,
    }));
    this.setState({
      loading: true,
    });
    return fetch(requestUrl, {
      'content-type': 'application/json',
      'cache-control': 'no-cache',
    })
      .then(res => res.json())
      .then((response) => {
        const { articles, meta } = response;
        this.setState({
          articles,
          meta,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          errorMsg: 'Some went wrong while loading articles. Please try again later',
        });
      });
  };

  updateSearchParams(searchParams) {
    this.setState({
      searchParams,
    });
  }

  renderFiskBlock() {
    const { articles } = this.state;
    return _.map(articles, article => (
      <FiskBlock key={article.id} article={article} />
    ));
  }

  render() {
    const {
      loading, searchParams, meta, sort, errorMsg,
    } = this.state;
    return (
      <div id="content" className="site-content">
        <div className="contanier contanier-md">
          <div className="tagline-section text-center">
            <img src={RedLogo} alt="Fiskkit logo" />
            <p className="tagline">A better way to discuss the news</p>
          </div>
          <div className="sorting-tabs">
            <ul>
              <li className={sort === sortTypes.recent ? 'active' : ''}>
                <a
                  href="#"
                  className="tab"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                    if (sort === sortTypes.mostFisked) {
                      this.setState({
                        sort: sortTypes.recent,
                      });
                    }
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
                    if (sort === sortTypes.recent) {
                      this.setState({
                        sort: sortTypes.mostFisked,
                      });
                    }
                  }}
                >
                  Most Fisked
                </a>
              </li>
            </ul>
          </div>
          <div className="article-section">
            {
              loading
              && (
                <div style={{ textAlign: 'center', marginTop: '5px' }}>Loading...</div>
              )
            }

            {
              !loading && errorMsg
              && (
                <div style={{ textAlign: 'center', marginTop: '5px' }}>
                  {errorMsg}
                </div>
              )
            }
            {
              !loading && !errorMsg
              && (
                <div className="row">
                  {this.renderFiskBlock()}
                </div>
              )
            }
            {
              !!_.get(meta, 'count', false)
              && (
                <Pagination
                  meta={meta}
                  searchParams={searchParams}
                  updateSearchParams={params => this.updateSearchParams(params)}
                />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
