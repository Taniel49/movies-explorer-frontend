import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header(props) {
    return (
        <header className="header">
            <Link exact to="/"><img className="header__logo" src={logo} alt="Лого"/></Link>
            {props.nav}
        </header>
    );
}

export default Header;