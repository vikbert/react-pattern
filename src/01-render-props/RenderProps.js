import React from 'react';
import CounterMui from './CounterMui';
import CounterSimple from './CounterSimple';

const RenderProps = () => (
    <>
        <div className="message">
            <div className="message-header">Render Props</div>
            <div className="message-body">
                info about the render props
            </div>
        </div>
        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <div className="tile is-child box">
                    <p className="title">Simple Counter</p>
                    <CounterSimple/>
                </div>

            </div>
            <div className="tile is-parent">
                <div className="tile is-child box">
                    <p className="title">Mui Counter</p>
                    <CounterMui/>
                </div>
            </div>
        </div>
    </>
);

export default RenderProps;
