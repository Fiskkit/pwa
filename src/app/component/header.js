import React from 'react';
// eslint-disable-next-line
import { PropTypes } from 'prop-types';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

// Images
import Logo from '../../resources/images/logo.png';
import RedLogo from '../../resources/images/fiskkit-red-black-logo.png';


// eslint-disable-next-line
export default class Header extends React.Component {
  static propTypes = {
    toggleWrapperClass: PropTypes.func,
  };

  static defaultProps = {
    toggleWrapperClass: () => {},
  };

  render() {
    const { toggleWrapperClass } = this.props;

    return (
      <header>
        <div className="site-header">
          <div className="top-bar">
            <div className="float-left">
              <Link
                to="/"
                className="logo"
              >
                <img src={Logo} alt="Fiskit Logo" />
              </Link>
              <a
                href="#"
                className="header-link"
                onClick={(e) => {
                  if (e && e.preventDefault) e.preventDefault();
                }}
              >
                What is Fiskkit?
              </a>
            </div>
            <div className="float-right">
              {/*
              <div className="navbar-account">
                <a
                  href="#"
                  className="dropdown-toggle"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  <span className="name">Hello, User</span>
                </a>
              </div>
              */}
              <div
                className="nav-toggle"
                onClick={() => toggleWrapperClass()}
              >
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="side-nav">
            <div className="nav-logo">
              <img src={RedLogo} alt="Fiskit Logo" />
            </div>
            <ul className="nav">
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  Organizations
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  Our Team
                </Link>
              </li>
            </ul>
            <div>
              <ul className="nav secondary-nav">
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      if (e && e.preventDefault) e.preventDefault();
                    }}
                  >
                    My profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      if (e && e.preventDefault) e.preventDefault();
                    }}
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      if (e && e.preventDefault) e.preventDefault();
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="sidebar-overlay"
            onClick={() => toggleWrapperClass()}
          />
        </div>
      </header>
    );
  }
}
