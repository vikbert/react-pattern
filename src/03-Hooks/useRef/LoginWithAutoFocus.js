import React, {useRef} from 'react';

const LoginForm = () => {
    const userRef = useRef();
    const handleOnClick = () => {
        userRef.current.focus();
    };
    
    return (
        <>
            <button onClick={handleOnClick}>click to login</button>
            <br/>

            <input ref={userRef} type="text" placeholder="user name"/>
            <input type="text" placeholder="password"/>
            <input type="submit" value='SUBMIT LOGIN'/>
        </>
    );
};

export default LoginForm;
