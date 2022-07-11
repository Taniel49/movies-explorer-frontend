import React from 'react';
import picture from '../../images/pic__COLOR_pic.png'

function Card() {
    return (
        <div className="card">
                <img className="card__image" src={picture} alt={'Изображение фильма'}/>
                <div className="card__caption">
                    <h2 className="card__title">33 слова о дизайне</h2>
                    <div className="card__length">1ч 17м</div>
                </div>
                <button className="card__favourites-button">Сохранить</button>
        </div>
    );
}

export default Card