import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const [isChecked, setIsChecked] = React.useState(true);
    const [cards, setCards] = React.useState(props.savedCards);

    function handleCheckbox(event) {
        if (event.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    function handleSearchSubmit(searchInput) {
        const foundedMovies = cards.filter(({
                                                nameEN = '',
                                                nameRU = '',
                                                duration = ''
                                            }) => {
            return (nameEN + nameRU).toLowerCase().includes(searchInput.toLowerCase() && (!isChecked ? duration > 40 : true));
        });

        setCards(foundedMovies);
    }

    return (
        <div>
            <SearchForm onSearch={handleSearchSubmit}
                        onChange={handleCheckbox}/>
            <MoviesCardList
                isSavedCards={true}
                cards={cards}
                favouritesButton={false}
                deleteButton={true}
                handleDeleteClick={props.handleDeleteClick}/>
        </div>
    );
}

export default SavedMovies;