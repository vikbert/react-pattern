import React from 'react';
import Counter from './Counter';
import Star from './Star';
import withFormat from './withFormat';
import withStorage from './withStorage';


const StarWithFormat = withFormat(Star);
const CounterWithStorage = withStorage(Counter);

const Demo = () => {
  return (
    <div>
      <h1>HOC</h1>

      <h2>01: demo</h2>
      <CounterWithStorage/>

      <h2>02: demo</h2>
      <Star name={'WARS'}/>
      <StarWithFormat name='WARS'/>
    </div>
  );
};

export default Demo;
