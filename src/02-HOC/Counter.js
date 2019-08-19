import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const CounterNeedingPersistence = (props) => {
  const [count, setCount] = useState(0);
  const {load, save} = props;

  useEffect(() => {
    const loadedCount = load('count');
    setCount(loadedCount ? parseInt(loadedCount) : 0);
  }, [load]);

  useEffect(() => {
    save('count', count);
  });

  const decrement = () => {
    setCount(count - 5);
  };

  const increment = () => {
    setCount(count + 5);
  };

  return (
    <>
      <h3>{count}</h3>
      <button onClick={decrement}>decrement(-5)</button>
      <button onClick={increment}>increment(+5)</button>
    </>
  );
};

CounterNeedingPersistence.propTypes = {
  load: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

export default CounterNeedingPersistence;
