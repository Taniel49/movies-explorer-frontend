import React from 'react';
import {Link} from 'react-router-dom';

function LandingNavigation() {
    return (
        <div className="landing-navigation">
            <Link to="/signup">
                <button className="navigation__button">Регистрация</button>
            </Link>
            <Link to="/signin">
                <button className="landing-navigation__login-button">Войти</button>
            </Link>
        </div>
    )
}

export default LandingNavigation;