import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../images/menu.svg';

function Navigation(props) {
    return (
        <div className="navigation">
            <div className="navigation__block">
                <Link to="/movies">
                    <button className="navigation__button">Фильмы</button>
                </Link>
                <Link to="/saved-movies">
                    <button className="navigation__button">Сохраненные фильмы</button>
                </Link>
            </div>
            <div className="navigation__block">
                <Link to="/profile">
                    <button className="navigation__button">Аккаунт</button>
                </Link>
                <div className="navigation__profile-logo"></div>
            </div>
            <button className="navigation__menu-button" onClick={props.onMenu}><img src={menu} alt="Меню"/></button>
        </div>
    );
}

export default Navigation;