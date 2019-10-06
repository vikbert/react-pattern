import React from 'react';
import Counter from './Counter';
import Star from './Star';
import withFormat from './withFormat';
import withStorage from './withStorage';

const StarWithFormat = withFormat(Star);
const CounterWithStorage = withStorage(Counter);

const Hoc = () => {
    return (
        <>
            <div className="message">
                <div className="message-header">HOC</div>
                <div className="message-body">
                    info about HOC
                </div>
            </div>

            <div className="tile is-ancestor">
                <div className="tile is-vertical">
                    <div className="tile is-child box">
                        <p className="tile">some</p>
                        <CounterWithStorage/>
                    </div>
                    <div className="tile is-child box">
                        <Star name={'WARS'}/>
                        <StarWithFormat name="WARS"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hoc;
