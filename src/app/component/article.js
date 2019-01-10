import React from 'react';
import _ from 'lodash';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { withRouter } from 'react-router-dom';


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
      comments: [],
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
          errorMsg: ''
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

  renderParagraph = (para) => {
    return !_.isEmpty(para)
      && (
        _.map(para, sentenceObj => (
          <span key={_.get(sentenceObj, 'id', '')}>
            {_.get(sentenceObj, 'body', '')}
          </span>
        ))
      );
  };

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
            _.map(paragraphs, (para, key) => (
              <p key={`paragraph_${key}`}>
                {this.renderParagraph(para)}
              </p>
            ))
          )
        }
        Article
      </div>
    );
  }
}

export default withRouter(Article);
