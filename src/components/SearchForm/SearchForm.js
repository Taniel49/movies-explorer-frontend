import React, {useState} from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    const [searchInput, setSearchInput] = useState("");

    function handleSearchInputChange(e) {
        setSearchInput(e.target.value);
    }

    function handleSearchSubmit(e) {
        e.preventDefault();

        props.onSearch(searchInput);
    }

    return (
        <section>
            <form className="search-form" onSubmit={handleSearchSubmit}>
                <div className="search-form__search">
                    <input className="search-form__input" type="text" required placeholder="Фильм"
                           onChange={handleSearchInputChange}/>
                    <button type="submit" className="search-form__submit-button">Найти</button>
                </div>
                <FilterCheckbox handleCkeckbox = {props.onChange}/>
            </form>
        </section>
    )
        ;
}

export default SearchForm;