import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
    const [cards, setCards] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState(true);

    function handleCheckbox(event) {
        if (event.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    function handleSearchSubmit(searchInput) {
        props.handlePreloader();
        props.handleMoviesSearch();

        const foundedMovies = JSON.parse(localStorage.getItem('movies')).filter(({
                                                                                     nameEN = '',
                                                                                     nameRU = '',
                                                                                     duration = ''
                                                                                 }) => {
            return (nameEN + nameRU).toLowerCase().includes(searchInput.toLowerCase()) && (!isChecked ? duration > 40 : true);
        });

        setCards(foundedMovies);
    }

    return (<div>
        <SearchForm onSearch={handleSearchSubmit}
                    onChange={handleCheckbox}/>
        {props.isLoading ? <Preloader/> : <MoviesCardList cards={cards}
                                                          favouritesButton={true}
                                                          deleteButton={false}
                                                          handleFavouritesClick={props.handleFavouritesClick}/>}
    </div>);
}

export default Movies;