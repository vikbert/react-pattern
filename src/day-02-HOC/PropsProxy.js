import React from 'react';
import HelloWorld from './HelloWorld';

const PropsProxy = (HelloWorld) => {
  return class PP extends React.Component {
    render() {
      return <HelloWorld {...this.props}/>;
    }
  };
};
export default PropsProxy;
