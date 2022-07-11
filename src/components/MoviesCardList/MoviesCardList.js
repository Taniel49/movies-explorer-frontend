import React from 'react';
import Card from "../Card/Card";

function MoviesCardList() {
    return (
        <div>
            <section className="moviesCardList">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
            <button className="moviesCardList__more-button">Ещё</button>
        </div>
    );
}

export default MoviesCardList