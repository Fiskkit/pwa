/**
* Created by ankushtiwari on 8/1/19.
*/
import React from 'react';


// eslint-disable-next-line
export default class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination">
        <a href="#" className="disabled prev">
          <i className="fa fa-angle-left" />
        </a>
        <ul>
          <li className="current">
            <a href='#'>1</a>
          </li>
          <li>
            <a href='#'>2</a>
          </li>
          <li>
            <a href='#'>3</a>
          </li>
          <li>
            <a href='#'>4</a>
          </li>
          <li>
            <a href='#'>...</a>
          </li>
          <li>
            <a href='#'>30</a>
          </li>
        </ul>
        <a href="#" className="next">
          <i className="fa fa-angle-right" />
        </a>
      </div>
    );
  }
}
