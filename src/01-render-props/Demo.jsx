import React from 'react';
import CounterSimple from "./CounterSimple";
import CounterMui from "./CounterMui";

const Demo = () => (
  <>
    <h3>Simple Counter</h3>
    <CounterSimple/>

    <h3>MUI Counter</h3>
    <CounterMui/>
  </>
);

export default Demo;
