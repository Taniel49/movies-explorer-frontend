import React from 'react';
import saved from '../../images/saved.svg';
import api from "../../utils/MainApi";

function Card(props) {
    const [isSignHidden, setIsSignHidden] = React.useState(true);
    const [isFavButtonHidden, setIsFavButtonHidden] = React.useState(props.favouritesButton);
    const SignClassName = (
        `card__saved-sign ${isSignHidden ? 'card__hidden' : ''}`
    );
    const FavButtonClassName = (
        `card__favourites-button ${isFavButtonHidden ? 'card__hidden' : ''}`
    );

    const DelButtonClassName = (
        `card__favourites-button ${props.deleteButton ? 'card__hidden' : ''}`
    );

    function handleFavouritesClick(){
        api.postMovie({
            country: props.card.country,
            director: props.card.director,
            duration: props.card.duration,
            year: props.card.year,
            description: props.card.description,
            image: props.card.image,
            trailer: props.card.trailer,
            nameRU: props.card.nameRU,
            nameEN: props.card.nameEN,
            thumbnail: props.card.thumbnail,
            movieId: props.card.movieId,
        }).then((res) => {
            localStorage.setItem('movies', JSON.stringify(res));
        }).catch((err) => {
            console.log(err);
        });

        setIsFavButtonHidden(true);
        setIsSignHidden(false);
    }

    return (
        <div className="card">
            <a href={props.card.trailerLink} target="_blank"><img className="card__image"
                                             src={`https://api.nomoreparties.co/${props.card.image.url}`}
                                             alt={'Изображение фильма'}/> </a>
            <div className="card__caption">
                <h2 className="card__title">{props.card.nameRU}</h2>
                <div className="card__length">{`${props.card.duration} м`}</div>
            </div>
            {props.favouritesButton ? <button className={FavButtonClassName} onClick={handleFavouritesClick}>Сохранить</button> :
            <button className={DelButtonClassName} onClick={props.onDeleteClick(props.card)}></button>}
            <img className={SignClassName} src={saved} alt={'Отметка сохраненного фильма'}/>
        </div>
    );
}

export default Card