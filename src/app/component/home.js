import React from 'react';

// Local imports
import ArticlesGrid from './articles-grid';

// Images
import Banner from '../../resources/images/banner.jpg';


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

        <ArticlesGrid {...this.props} />

      </div>
    );
  }
}
