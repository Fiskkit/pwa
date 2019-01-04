import React from 'react';
import Logo from '../../resources/images/logo.png';
// import '../../resources/css/style.scss';

// eslint-disable-next-line
export default class Home extends React.Component {
  render() {
    return (
      <main>
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
              <img src={Logo} alt="Fiskkit logo" />
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
                <div className="col col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-img">
                        <a
                          href="#"
                          className="bg-img"
                        />
                      </div>
                      <div className="card-content">
                        <h4 className="card-title">
                          <a href="#">
                            Corporate Speech Police Are Not the Answer to Online Hate
                          </a>
                        </h4>
                        <div className="details">
                          <div className="float-left">
                            <span>By Corynne McSherry</span>
                            <span>Electronic Frontier Foundation</span>
                          </div>
                          <div className="float-right">
                            <span className="time">7 min read</span>
                          </div>
                        </div>
                        <div className="share-details">
                          <div className="float-left">
                            <span className="date">October 27, 2018</span>
                          </div>
                          <div className="float-right">
                            <a href="#" className="icon">
                              <span className="round-icon">
                                <i className="fa fa-pencil" />
                            </span>
                              <span className="count">6</span>
                            </a>
                            <a href="#" className="icon">
                              <span className="round-icon">
                                <i className="fa fa-share" />
                            </span>
                              <span className="count">3</span>
                            </a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-img">
                        <a
                          href="#"
                          className="bg-img"
                        />
                      </div>
                      <div className="card-content">
                        <h4 className="card-title">
                          <a href="#">Corporate Speech Police Are Not the Answer to Online Hate</a>
                        </h4>
                        <div className="details">
                          <div className="float-left">
                            <span>By Corynne McSherry</span>
                            <span>Electronic Frontier Foundation</span>
                          </div>
                          <div className="float-right">
                            <span className="time">7 min read</span>
                          </div>
                        </div>
                        <div className="share-details">
                          <div className="float-left">
                            <span className="date">October 27, 2018</span>
                          </div>
                          <div className="float-right">
                            <a href="#" className="icon">
                              <span className="round-icon">
                                <i className="fa fa-pencil"></i>
                            </span>
                              <span className="count">6</span>
                            </a>
                            <a href="#" className="icon">
                              <span className="round-icon">
                                <i className="fa fa-share"></i>
                            </span>
                              <span className="count">3</span>
                            </a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-img">
                        <a
                          href="#"
                          className="bg-img"
                        />
                      </div>
                      <div className="card-content">
                        <h4 className="card-title">
                          <a href="#">Corporate Speech Police Are Not the Answer to Online Hate</a>
                        </h4>
                        <div className="details">
                          <div className="float-left">
                            <span>By Corynne McSherry</span>
                            <span>Electronic Frontier Foundation</span>
                          </div>
                          <div className="float-right">
                            <span className="time">7 min read</span>
                          </div>
                        </div>
                        <div className="share-details">
                          <div className="float-left">
                            <span className="date">October 27, 2018</span>
                          </div>
                          <div className="float-right">
                            <a href="#" className="icon">
                              <span className="round-icon">
                                <i className="fa fa-pencil" />
                              </span>
                              <span className="count">6</span>
                            </a>
                            <a href="#" className="icon">
                              <span className="round-icon">
                                <i className="fa fa-share" />
                              </span>
                              <span className="count">3</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
