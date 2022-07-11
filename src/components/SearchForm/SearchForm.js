import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <div>
            <form className="search-form">
                <div className="search-form__search">
                    <input className="search-form__input" type=" text" required placeholder="Фильм"/>
                    <button type="submit" className="search-form__submit-button">Найти</button>
                </div>
                <FilterCheckbox/>
            </form>
        </div>
    )
        ;
}

export default SearchForm;