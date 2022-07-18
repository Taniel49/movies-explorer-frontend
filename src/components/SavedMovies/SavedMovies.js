import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import api from "../../utils/MainApi";

function SavedMovies() {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getMovies().then((res) => {
            setCards(res)
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    function handleSearchSubmit(searchInput) {
        const foundedMovies = cards.filter(({nameEN = '', nameRU = ''}) => {
            return (nameEN + nameRU).toLowerCase().includes(searchInput.toLowerCase());
        });

        setCards(foundedMovies);
    }

    return (
        <div>
            <SearchForm onSearch={handleSearchSubmit}/>
            <MoviesCardList cards={cards}
                            favouritesButton={false}
                            deleteButton={true}/>
        </div>
    );
}

export default SavedMovies;