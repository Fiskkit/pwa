/**
* Created by ankushtiwari on 8/1/19.
*/
import React from 'react';

// eslint-disable-next-line
export default class FiskBlock extends React.Component {
  render() {
    return (
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
    );
  }
}
