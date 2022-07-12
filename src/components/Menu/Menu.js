import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <div className="menu__container">
                <button className="menu__close-button" type="button"></button>
                <div className="menu__navigation">
                    <div className="menu__navigation_block-top">
                        <Link exact to="/">
                            <button className="menu__navigation__block-top-button">Главная</button>
                        </Link>
                        <Link to="/movies">
                            <button className="menu__navigation__block-top-button">Фильмы</button>
                        </Link>
                        <Link to="/saved-movies">
                            <button className="menu__navigation__block-top-button">Сохраненные фильмы</button>
                        </Link>
                    </div>
                    <div className="menu__navigation__block-bottom">
                        <Link to="/profile">
                            <button className="menu__navigation__block-bottom-button">Аккаунт</button>
                        </Link>
                        <div className="menu__navigation__profile-logo"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;