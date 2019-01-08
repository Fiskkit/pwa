import React from 'react';
import Header from './header';

// eslint-disable-next-line
export default class Layout extends React.Component {
  render() {
    const { props } = this;
    return (
      <div>
        <Header />
        <main>
          {props.children}
        </main>
      </div>
    );
  }
}
