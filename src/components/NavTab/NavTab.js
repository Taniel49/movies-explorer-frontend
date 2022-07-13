import React from 'react';

function NavTab() {
    return (
        <nav>
            <ul className="nav-tab">
                <li className="nav-tab__list-item">
                    <a href="#about-project" className="nav-tab__link">
                        <button>О проекте</button>
                    </a>
                </li>
                <li className="nav-tab__list-item">
                    <a href="#techs" className="nav-tab__link">
                        <button>Технологии</button>
                    </a>
                </li>
                <li className="nav-tab__list-item">
                    <a href="#student" className="nav-tab__link">
                        <button>Студент</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;