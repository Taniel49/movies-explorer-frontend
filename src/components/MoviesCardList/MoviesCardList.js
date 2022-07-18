import React from 'react';
import Card from "../Card/Card";
import {useWindowResize} from "../../utils/useWindowResize";
import api from "../../utils/MainApi";

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
        if (props.cards.length > cardsForDisplayNumber) {
            setCardsForDisplay(props.cards.slice(0, cardsForDisplayNumber));
        } else {
            setCardsForDisplay(props.cards);
        }
    }, [width, props.cards]);

    function handleMoreButtonClick() {
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

    function handleDeleteClick(card){
        api.deleteMovie(card._id).then(() => {
            setCardsForDisplay((state) => state.filter((c) => {
                return c._id !== card._id
            }))
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <section>
            <div className="moviesCardList">
                {cardsForDisplay.map((card, i) => (
                    <Card card={card}
                          key={card.id}
                          favouritesButton = {props.favouritesButton}
                          deleteButton = {props.deleteButton}
                          onDeleteClick = {handleDeleteClick}
                    />
                ))}
            </div>
            {(props.cards.length > cardsForDisplayNumber) ? <button className="moviesCardList__more-button"
                                                                    onClick={handleMoreButtonClick}>Ещё</button> :
                <div></div>}
        </section>
    );
}

export default MoviesCardList