import React from 'react';

const withStorage = (WrappedComponent) => {
  class HOC extends React.Component {
    state = {
      localStorageAvailable: false,
    };

    load = (key) => {
      return localStorage.getItem(key);

    };

    save = (key, data) => {
      localStorage.setItem(key, data);
    };

    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
        />
      );
    }
  }

  return HOC;
};

export default withStorage;
