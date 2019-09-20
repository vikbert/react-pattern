import React from 'react';
import Counter from './Counter';
import Star from './Star';
import withFormat from './withFormat';
import withStorage from './withStorage';
import Nav from '../Nav';


const StarWithFormat = withFormat(Star);
const CounterWithStorage = withStorage(Counter);

const Hoc = () => {
  return (
    <div>
        <Nav/>
      <h1>HOC</h1>

      <h2>01: counter with storage</h2>
      <CounterWithStorage/>

      <h2>02: starwar with styling</h2>
      <Star name={'WARS'}/>
      <StarWithFormat name='WARS'/>
    </div>
  );
};

export default Hoc;
