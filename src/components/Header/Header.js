import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import Menu from "../Menu/Menu";
import Navigation from "../Navigation/Navigation";
import LandingNavigation from "../LandingNavigation/LandingNavigation";

function Header(props) {
    return (
        <header>
            <div className="header">
                <Link to="/"><img className="header__logo" src={logo} alt="Лого"/></Link>
                {props.isLoggedIn ? <Navigation onMenu={props.handleMenu}/> : <LandingNavigation/>}
            </div>
            <Menu isOpenMenu={props.isOpenMenu}
                  closeMenu={props.closeMenu}/>
        </header>
    );
}

export default Header;