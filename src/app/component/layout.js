import React from 'react';
import Header from './header';

// eslint-disable-next-line
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wrapperClass: 'page-wrapper',
    };
  }

  toggleWrapperClass = () => {
    const { wrapperClass } = this.state;
    this.setState({
      wrapperClass: wrapperClass === 'page-wrapper' ? 'page-wrapper open' : 'page-wrapper',
    });
  };

  render() {
    // eslint-disable-next-line
    const { children } = this.props;
    const { wrapperClass } = this.state;

    return (
      <div className={wrapperClass}>
        <Header
          toggleWrapperClass={() => this.toggleWrapperClass()}
        />
        <main>
          {children}
        </main>
      </div>
    );
  }
}
