import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
    const [cards, setCards] = React.useState((localStorage.getItem('searchResults') === null)
        ? []
        : (JSON.parse(localStorage.getItem('searchResults'))).cards);
    const [isChecked, setIsChecked] = React.useState((localStorage.getItem('searchResults') === null)
        ? true
        : (JSON.parse(localStorage.getItem('searchResults'))).isChecked);
    const [isNothingFound, setIsNothingFound] = React.useState(false);

    function handleCheckbox(event) {
        if (event.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    async function handleSearchSubmit(searchInput) {
        if (localStorage.getItem('movies') === null) {
            props.handlePreloader();
            await props.handleMoviesSearch();
        }

        const foundedMovies = JSON.parse(localStorage.getItem('movies')).filter(({
                                                                                     nameEN = '',
                                                                                     nameRU = '',
                                                                                     duration = ''
                                                                                 }) => {
            return (nameEN + nameRU).toLowerCase().includes(searchInput.toLowerCase()) && (!isChecked ? duration > 40 : true);
        });

        (foundedMovies.length === 0) ? setIsNothingFound(true) : setIsNothingFound(false);

        setCards(foundedMovies);

        localStorage.setItem('searchResults', JSON.stringify({
            cards: foundedMovies,
            isChecked: isChecked,
            input: searchInput
        }));
    }

    return (<div>
        <SearchForm onSearch={handleSearchSubmit}
                    onChange={handleCheckbox}/>
        {props.isLoading ? <Preloader/> : <MoviesCardList cards={cards}
                                                          favouritesButton={true}
                                                          deleteButton={false}
                                                          handleFavouritesClick={props.handleFavouritesClick}
                                                          isNothingFound={isNothingFound}
                                                          savedCards={props.savedCards}/>}
    </div>);
}

export default Movies;