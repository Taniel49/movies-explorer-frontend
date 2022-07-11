import React from 'react';


function Techs() {
    return (
        <div className="techs">
            <h2 className="techs__header">Технологии</h2>
            <h3 className="techs__tech-header">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__techs-container">
                <div className="techs__tech">HTML</div>
                <div className="techs__tech">CSS</div>
                <div className="techs__tech">JS</div>
                <div className="techs__tech">React</div>
                <div className="techs__tech">Git</div>
                <div className="techs__tech">Express.js</div>
                <div className="techs__tech">mongoBD</div>
            </div>
        </div>
    );
}

export default Techs;