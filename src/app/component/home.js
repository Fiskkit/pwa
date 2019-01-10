import React from 'react';

// Local imports
import ArticlesGrid from './articles-grid';

// Images
import Banner from '../../resources/images/banner.jpg';
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
          <div
            className="banner-img"
            style={{ backgroundImage: `url(${Banner})` }}
          >
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
