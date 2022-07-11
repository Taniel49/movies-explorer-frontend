import React from 'react';
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
    return (
        <div>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <Portfolio/>
        </div>
    );
}

export default Main;