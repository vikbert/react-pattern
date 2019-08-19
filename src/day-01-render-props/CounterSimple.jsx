import React from 'react';
import Container from '@material-ui/core/Container';
import CounterContainer from "./CounterContainer";

const CounterSimple = () => (
  <CounterContainer render={({increment, decrement, count}) => (
    <Container>
      <h3>Simple Counter</h3>
      <div>
        <h3>{count}</h3>
        <button onClick={() => decrement()}>decrement(-)</button>
        <button onClick={() => increment()}>increment(+)</button>
      </div>
    </Container>
  )}/>
);

export default CounterSimple;
