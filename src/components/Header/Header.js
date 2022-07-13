import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import Menu from "../Menu/Menu";

function Header(props) {
    return (
        <header>
            <div className="header">
                <Link exact to="/"><img className="header__logo" src={logo} alt="Лого"/></Link>
                {props.nav}
            </div>
            <Menu/>
        </header>
    );
}

export default Header;