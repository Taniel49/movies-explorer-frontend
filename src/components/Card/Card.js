import React from 'react';
import saved from '../../images/saved.svg'
import picture from '../../images/pic__COLOR_pic.png'

function Card() {
    return (
        <div className="card">
                <img className="card__image" src={picture} alt={'Изображение фильма'}/>
                <div className="card__caption">
                    <h2 className="card__title">33 слова о дизайне</h2>
                    <div className="card__length">1ч 17м</div>
                </div>
                <button className="card__favourites-button card__hidden">Сохранить</button>
                <button className="card__delete-button card__hidden"></button>
                <img className="card__saved-sign card__hidden" src={saved} alt={'Отметка сохраненного фильма'}/>
        </div>
    );
}

export default Card