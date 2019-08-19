import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterContainer = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('counter is already zero');
    }
  };

  return (
    <>
      {props.render({increment, decrement, count})}
    </>
  );
};

CounterContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default CounterContainer;
