import React from 'react';

const withFormat = (WrappedComponent) => {
  const divStyle = {
    height: '800px',
    width: '800px',
    backgroundImage: 'url(https://www.bento.de/images/00000000-0003-0004-0000-000001934451_w910_h600_fpx50_fpy50.jpg)',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Poller One',
    fontSize: '50px',
    lineHeight: '40px',
  };

  class HOC extends React.Component {

    render() {
      return (
        <div style={divStyle}>
          <WrappedComponent {...this.props}/>
        </div>
      );
    }
  }

  return HOC;
};

export default withFormat;
