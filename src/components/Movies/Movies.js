import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import apiMovies from "../../utils/MoviesApi";

function Movies() {
    const [cards, setCards] = React.useState([]);

    function handleSearchSubmit(searchInput) {
        apiMovies.getMovies().then((res) => {
            localStorage.setItem('movies', JSON.stringify(res));
        }).catch((err) => {
            console.log(err);
        });

        const foundedMovies = JSON.parse(localStorage.getItem('movies')).filter(({nameEN = '', nameRU = ''}) => {
            return (nameEN + nameRU).toLowerCase().includes(searchInput.toLowerCase());
        });

        setCards(foundedMovies);
    }

    return (<div>
        <SearchForm onSearch={handleSearchSubmit}/>
        <MoviesCardList cards={cards}
                        favouritesButton={true}
                        deleteButton={false}/>
    </div>);
}

export default Movies;