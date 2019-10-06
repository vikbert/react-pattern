import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterContainer = (props) => {
    const [count, setCount] = useState(500);

    const increment = () => {
        setCount(count + 10);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 10);
        } else {
            console.error('counter is already zero');
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
