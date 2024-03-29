import React from 'react';
import Card from "../Card/Card";
import {useWindowResize} from "../../utils/useWindowResize";

function MoviesCardList(props) {
    const [cardsForDisplay, setCardsForDisplay] = React.useState([]);
    const {width} = useWindowResize();
    const {cardsForDisplayNumber, cardsForDisplayWithButtonNumber} = countCards();

    function countCards() {
        if (width <= 767) {
            return {
                'cardsForDisplayNumber': 5,
                'cardsForDisplayWithButtonNumber': 2
            };
        } else if (width <= 1175) {
            return {
                'cardsForDisplayNumber': 8,
                'cardsForDisplayWithButtonNumber': 2
            };
        } else {
            return {
                'cardsForDisplayNumber': 12,
                'cardsForDisplayWithButtonNumber': 3
            };
        }
    }

    React.useEffect(() => {
        if (props.isSavedCards) {
            setCardsForDisplay(props.cards);
        } else if (props.cards.length > cardsForDisplayNumber) {
            setCardsForDisplay(props.cards.slice(0, cardsForDisplayNumber));
        } else {
            setCardsForDisplay(props.cards);
        }
    }, [width, props.cards]);

    function handleMoreButtonClick() {
        console.log(props.cards);
        if (props.cards.length - cardsForDisplay.length === 1) {
            const newArray = [...cardsForDisplay];
            newArray.push(
                props.cards[newArray.length],);
            setCardsForDisplay(newArray);
        } else if ((props.cards.length - cardsForDisplay.length === 2)) {
            const newArray = [...cardsForDisplay];
            newArray.push(
                props.cards[newArray.length],
                props.cards[newArray.length + 1]);
            setCardsForDisplay(newArray);
        } else {
            const newArray = [...cardsForDisplay];
            cardsForDisplayWithButtonNumber === 3 ?
                newArray.push(
                    props.cards[newArray.length],
                    props.cards[newArray.length + 1],
                    props.cards[newArray.length + 2])
                : newArray.push(
                    props.cards[newArray.length],
                    props.cards[newArray.length + 1]);

            setCardsForDisplay(newArray);
        }
    }

    return (
        <section>
            {props.isNothingFound ? <div className="moviesCardList__nothing-found-message">Ничего не найдено</div> :
                <div></div>}
            <div className="moviesCardList">
                {cardsForDisplay.map((card) => (
                    <Card card={card}
                          key={card._id || card.id}
                          ifSavedCard={props.isSavedCards}
                          favouritesButton={props.favouritesButton}
                          deleteButton={props.deleteButton}
                          onDeleteClick={props.handleDeleteClick}
                          handleFavouritesClick={props.handleFavouritesClick}
                          isLiked = {!props.ifSavedCard && !!props.savedCards.find((savedCard)=>{return savedCard.movieId === card.id})}
                    />
                ))}
            </div>
            {((props.cards.length > cardsForDisplayNumber) && !props.isSavedCards && (props.cards.length > cardsForDisplay.length)) ?
                <button className="moviesCardList__more-button"
                        onClick={handleMoreButtonClick}>Ещё</button> :
                <div></div>}
        </section>
    );
}

export default MoviesCardList