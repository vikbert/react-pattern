import React, {useRef} from 'react';

const LoginForm = () => {
    const userRef = useRef();

    const handleOnClick = () => {
        userRef.current.focus();
    };

    return (
        <>
            <div>
                <button onClick={handleOnClick}>click to login</button>
            </div>
            <div>
                <input ref={userRef} type="text" placeholder="user name"/>
            </div>
        </>
    );
};

export default LoginForm;
