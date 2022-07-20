import React from 'react';
import saved from '../../images/saved.svg';

function Card(props) {
    const [isSignHidden, setIsSignHidden] = React.useState(true);
    const [isFavButtonHidden, setIsFavButtonHidden] = React.useState(false);
    const SignClassName = (
        `card__saved-sign ${isSignHidden ? 'card__hidden' : ''}`
    );
    const FavButtonClassName = (
        `card__favourites-button ${isFavButtonHidden ? 'card__hidden' : ''}`
    );

    const DelButtonClassName = (
        `card__delete-button ${props.deleteButton ? '' : 'card__hidden'}`
    );

    const imageSrc = (props.ifSavedCard ? props.card.image : `https://api.nomoreparties.co/${props.card.image.url}`)


    function handleFavouritesClick() {
        props.handleFavouritesClick(props.card)
        setIsFavButtonHidden(true);
        setIsSignHidden(false);
    }

    function handleDeleteClick() {
        props.onDeleteClick(props.card)
    }

    return (
        <div className="card">
            <a href={props.card.trailerLink} target="_blank" rel="noreferrer">
                <img className="card__image"
                     src={imageSrc}
                     alt={'Изображение фильма'}/>
            </a>
            <div className="card__caption">
                <h2 className="card__title">{props.card.nameRU}</h2>
                <div className="card__length">{`${props.card.duration} м`}</div>
            </div>
            {props.favouritesButton ?
                <button className={FavButtonClassName} onClick={handleFavouritesClick}>Сохранить</button> :
                <button className={DelButtonClassName} onClick={handleDeleteClick}></button>}
            <img className={SignClassName} src={saved} alt={'Отметка сохраненного фильма'}/>
        </div>
    );
}

export default Card