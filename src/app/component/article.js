import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Banner from '../../resources/images/banner.jpg';

// eslint-disable-next-line
class Article extends React.Component {

  static propTypes = {
    article: PropTypes.shape({}),
  };

  static defaultProps = {
    article: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      article: _.get(this.props, 'loadedData.article', {}) || {},
    };
  }

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
    const { article } = this.state;
    const paragraphs = _.get(article, 'paragraphs', []);
    return (
      <div>
        {
          _.isArray(paragraphs)
          && !_.isEmpty(paragraphs)
          && (
            <div className="comments-page">
              <div className="banner">
                <div
                  className="banner-img"
                  style={{ backgroundImage: `url(${Banner})` }}
                >
                  <div className="banner-content text-center">
                    <h3 className="banner-title">
                      {_.get(article, 'title', '')}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="site-content">
                <div className="contanier contanier-sm">
                  <div className="story-section" style={{ minHeight: '2000px' }}>
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
      </div>
    );
  }
}

export default Article;
