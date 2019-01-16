import React from 'react';
// eslint-disable-next-line
import { PropTypes } from 'prop-types';

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
              <a
                href="#"
                className="logo"
                onClick={(e) => {
                  if (e && e.preventDefault) e.preventDefault();
                }}
              >
                <img src={Logo} alt="Fiskit Logo" />
              </a>
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
                <a
                  href="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  Organizations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    if (e && e.preventDefault) e.preventDefault();
                  }}
                >
                  Our Team
                </a>
              </li>
            </ul>
            <div>
              <ul className="nav secondary-nav">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      if (e && e.preventDefault) e.preventDefault();
                    }}
                  >
                    My profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      if (e && e.preventDefault) e.preventDefault();
                    }}
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      if (e && e.preventDefault) e.preventDefault();
                    }}
                  >
                    Logout
                  </a>
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
