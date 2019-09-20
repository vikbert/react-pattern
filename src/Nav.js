import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
    <>
        <Link className={'nav-item'} to="/hoc">hoc</Link>
        <Link className={'nav-item'} to="/render-props">render props</Link>
        <Link className={'nav-item'} to="/hooks">hooks</Link>
    </>
);

export default Nav;
