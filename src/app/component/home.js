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
export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.defaultSearchParams = {
      display_respected_comment: 0,
      limit: 9,
      offset: 0,
      sort: sortTypes.recent,
    };
    this.state = {
      sort: sortTypes.recent,
      articles: [],
      meta: {},
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    const { sort } = this.state;
    const requestUrl = getRequestUrl('/articles', _.assignIn({}, this.defaultSearchParams, {
      sort,
    }));
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
        });
      })
      .catch(err => console.log('err', err));
  };

  renderFiskBlock() {
    const { articles } = this.state;
    return _.map(articles, article => (
      <FiskBlock key={article.id}/>
    ));
  }

  render() {
    return (
      <div>
        <div className="banner">
          <div className="banner-img">
            <div className="banner-content text-center">
              <h3 className="banner-title">
                A platform for civil, fact-based, and engaging discussions
              </h3>
              <button
                type="button"
                className="btn"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="site-content">
          <div className="contanier contanier-md">
            <div className="tagline-section text-center">
              <img src={RedLogo} alt="Fiskkit logo" />
              <p className="tagline">A better way to discuss the news</p>
            </div>
            <div className="sorting-tabs">
              <ul>
                <li>
                  <a href="#" className="tab">Social Feed</a>
                </li>
                <li className="active">
                  <a href="#" className="tab">Most Recent</a>
                </li>
                <li>
                  <a href="#" className="tab">Most Fisked</a>
                </li>
              </ul>
            </div>
            <div className="article-section">
              <div className="row">
                {this.renderFiskBlock()}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
