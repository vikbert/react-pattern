import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => (
    <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <Logo/>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className={'navbar-item'} to="/render-props">
                        Render-Props
                    </Link>
                    <Link className={'navbar-item'} to="/hoc">
                        Hoc
                    </Link>
                    <Link className={'navbar-item'} to="/hooks">
                        Hooks
                    </Link>
                </div>
            </div>
        </nav>
    </>
);

export default Navbar;
