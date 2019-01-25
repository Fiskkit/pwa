import React, { Component } from 'react';
import Banner from '../../../resources/images/banner.jpg';
import Paragraph from './paragraph';


export default (
  props: IArticleProps = {
    article: {
      paragraphs: [],
      title: ''
    },
  }
) => {
  const { article: { paragraphs, title } } = this.props;
  return (
    <div>
      <div className="comments-page">
        <div className="banner">
          <div
            className="banner-img"
            style={{ backgroundImage: `url(${Banner})` }}
          >
            <div className="banner-content text-center">
              <h3 className="banner-title">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="site-content">
          <div className="contanier contanier-sm">
            <div className="story-section" style={{ minHeight: '2000px' }}>
              {
                paragraphs.map((para: ISentence []) => <Paragraph para={para} />)
              }
            </div>
            <div className="comments-overlay" />
          </div>
        </div>
      </div>
    </div>
  );
};
