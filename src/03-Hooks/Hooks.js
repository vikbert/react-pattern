import React from 'react';
import LoginForm from './useRef/LoginWithAutoFocus';
import CalculateWordWithMemo from './userMemo/CaculateWordWithMemo';

const Hooks = () => (
    <>
        <div className="message">
            <div className="message-header">React Hooks</div>
            <div className="message-body">
                TODO: info about react hooks
            </div>
        </div>

        <div className="columns" style={{padding: '1rem'}}>
            <div className="column">
                <div className="box">
                    <LoginForm/>
                </div>
            </div>
            <div className="column">
                <div className="box">
                    <CalculateWordWithMemo/>
                </div>
            </div>
        </div>
    </>
);

export default Hooks;
