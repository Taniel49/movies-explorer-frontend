import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
    return (
        <div>
            <SearchForm/>
            <MoviesCardList/>
        </div>
    );
}

export default SavedMovies;