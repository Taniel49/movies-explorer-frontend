import React from 'react';
import Card from "../Card/Card";

function MoviesCardList() {
    return (
        <section>
            <div className="moviesCardList">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <button className="moviesCardList__more-button">Ещё</button>
        </section>
    );
}

export default MoviesCardList