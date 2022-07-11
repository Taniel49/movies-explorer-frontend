import React from 'react';

function NavTab() {
    return (
        <div>
            <nav className="nav-tab">
                <li className="nav-tab__link"><button>О проекте</button></li>
                <li className="nav-tab__link"><button>Технологии</button></li>
                <li className="nav-tab__link"><button>Студент</button></li>
            </nav>
        </div>
    );
}

export default NavTab;