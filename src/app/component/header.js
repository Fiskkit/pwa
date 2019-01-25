import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import React from 'react';
import fiskkitredblacklogo from '../../resources/images/fiskkit-red-black-logo.png';
import logo from '../../resources/images/logo.png';
import '../../resources/css/style.scss';



class Header extends Component{



  render(){

    return(
      <div>
        <header>
          <div className="site-header">
            <div className="top-bar">
              <div className="float-left">
                <a href="#" className="logo">
                  <img src={logo} />
                </a>
                <a href="#" className="header-link">
                  What is Fiskkit?
                </a>
              </div>
              <div className="float-right">
                
                <div className="navbar-account">
                  <a href="#" className="dropdown-toggle">
                    <span className="name">Hello, Janki</span>
                  </a>
                </div>
                <div className="nav-toggle" onClick={this.props.toggleSidebar} >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="side-nav">
              <div className="nav-logo">
                <img src={fiskkitredblacklogo} />
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
            <div className="sidebar-overlay" onClick={this.props.toggleSidebar} ></div>
          </div>
        </header>
      </div>            
    )
  }
}


export default Header;




// /* <!-- <button className="btn">Sign In</button> --> */