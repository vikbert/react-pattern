import React from 'react';
import Container from '@material-ui/core/Container';
import CounterContainer from "./CounterContainer";

const CounterSimple = () => (
  <CounterContainer render={({increment, decrement, count}) => (
    <Container>
        <h3>{count}</h3>
        <button onClick={() => decrement()}>decrement(-5)</button>
        <button onClick={() => increment()}>increment(+5)</button>
    </Container>
  )}/>
);

export default CounterSimple;
