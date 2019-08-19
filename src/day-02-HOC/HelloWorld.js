import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({firstName, lastName}) => (
  <>
    <h3>Hello,</h3>
    {firstName} {lastName}
  </>
);

HelloWorld.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default HelloWorld;
