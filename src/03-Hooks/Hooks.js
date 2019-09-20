import React from 'react';
import Nav from '../Nav';
import LoginForm from './useRef/LoginWithAutoFocus';
import CalculateWordWithMemo from './userMemo/CaculateWordWithMemo';

const Hooks = () => (
    <>
        <Nav/>
        <h1>React Hooks</h1>
        <h2>useRef()</h2>
        <LoginForm/>

        <h2>useMemo()</h2>
        <CalculateWordWithMemo/>
    </>
);

export default Hooks;
