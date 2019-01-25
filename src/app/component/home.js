import React from 'react';
import Picture from '@pawjs/srcset/picture';

// Local imports
import ArticlesGrid from './article/card-grid.tsx';
// Images
import Banner from '../../resources/images/banner.jpg?sizes=240w+360w+480w+720w+1024w+1080w+1900w';
import RedLogo from '../../resources/images/fiskkit-red-black-logo.png';

// eslint-disable-next-line
export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const {
      loading,
    } = this.state;
    if (loading) return (<div>Loading...</div>);
    return (
      <div>
        <div className="banner">
          <div className="banner-img">
            <Picture image={Banner} imgClassName="w-100" />
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

        <div id="content" className="site-content">
          <div className="contanier contanier-md">
            <div className="tagline-section text-center">
              <img src={RedLogo} alt="Fiskkit logo" />
              <p className="tagline">A better way to discuss the news</p>
            </div>
            <ArticlesGrid {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
