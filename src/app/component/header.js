import React from 'react';

// Images
import Logo from '../../resources/images/logo.png';
import RedLogo from '../../resources/images/fiskkit-red-black-logo.png';


// eslint-disable-next-line
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="site-header">
          <div className="top-bar">
            <div className="float-left">
              <a href="#" className="logo">
                <img src={Logo} alt="Fiskit Logo" />
              </a>
              <a href="#" className="header-link">
                What is Fiskkit?
              </a>
            </div>
            <div className="float-right">
              <div className="navbar-account">
                <a href="#" className="dropdown-toggle">
                  <span className="name">Hello, User</span>
                </a>
              </div>
              <div className="nav-toggle">
              </div>
            </div>
          </div>
          <div className="side-nav">
            <div className="nav-logo">
              <img src={RedLogo} alt="Fiskit Logo" />
            </div>
            <ul className="nav">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Organizations</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
            </ul>
            <div>
              <ul className="nav secondary-nav">
                <li>
                  <a href="#">My profile</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-overlay" />
        </div>
      </header>
    );
  }
}
