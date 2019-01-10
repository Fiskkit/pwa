import React from 'react';
import _ from 'lodash';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { withRouter } from 'react-router-dom';

// Images
import Banner from '../../resources/images/banner.jpg';

// eslint-disable-next-line
class Article extends React.Component {

  static propTypes = {
    match: PropTypes.shape({}).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errorMsg: '',
      article: {},
      // comments: [],
    };
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    const { match } = this.props;
    const requestUrl = `https://api.fiskkit.com/api/v1/articles/${_.get(match, 'params.articleId', '')}`;

    this.setState({
      loading: true,
    });
    return fetch(requestUrl, {
      'content-type': 'application/json',
      'cache-control': 'no-cache',
    })
      .then(res => res.json())
      .then((response) => {
        this.setState({
          article: response.article,
          loading: false,
          errorMsg: '',
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          errorMsg: 'Some went wrong while loading articles. Please try again later',
        });
      });
  };

  getFisks = () => {
    const { match } = this.props;
    const requestUrl = `https://api.fiskkit.com/api/v1/fisks?limit=20&article_id=${_.get(match, 'params,article', '')}&sort=respect|desc&most_respected_comment=1`;

    return fetch(requestUrl, {
      'content-type': 'application/json',
      'cache-control': 'no-cache',
    })
      .then(res => res.json())
      .then(() => {
        // const { articles, meta } = response;
        // this.setState({
        //   articles,
        //   meta,
        // });
      })
      .catch(err => console.log('err', err));
  };

  renderParagraph = para => !_.isEmpty(para)
    && (
      _.map(para, sentenceObj => (
        <div
          key={_.get(sentenceObj, 'id', '')}
          className="sentence"
        >
          {_.get(sentenceObj, 'body', '')}
        </div>
      ))
    );

  render() {
    const { article, loading, errorMsg } = this.state;
    const paragraphs = _.get(article, 'paragraphs', []);
    return (
      <div>
        {
          !loading && errorMsg
          && (
            <div style={{ textAlign: 'center', marginTop: '5px' }}>
              {errorMsg}
            </div>
          )
        }
        {
          _.isArray(paragraphs)
          && !_.isEmpty(paragraphs)
          && !loading && !errorMsg
          && (
            <div className="comments-page">
              <div className="banner">
                <div
                  className="banner-img"
                  style={{ backgroundImage: `url(${Banner})` }}
                >
                  <div className="banner-content text-center">
                    <h3 className="banner-title">
                      Corporate Speech Police Are Not the Answer to Online Hate
                    </h3>
                  </div>
                </div>
              </div>
              <div className="site-content">
                <div className="contanier contanier-sm">
                  <div className="story-section" style={{ height: '2000px' }}>
                    {
                      _.map(paragraphs, (para, key) => (
                        <div
                          key={`paragraph_${key}`}
                          className="paragraph"
                        >
                          {this.renderParagraph(para)}
                        </div>
                      ))
                    }
                  </div>
                  <div className="comments-overlay" />
                </div>
              </div>
            </div>
          )
        }
        Article
      </div>
    );
  }
}

export default withRouter(Article);
