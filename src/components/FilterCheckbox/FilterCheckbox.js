import React from 'react';

function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <label className="filterCheckbox__label" htmlFor="short-movies">
                <input className="filterCheckbox__input" type="checkbox" id="short-movies" defaultChecked={true}/>
                <span className="filterCheckbox__pseudo-item"></span>
                <span className="filter-checkbox__label-text">Короткометражки</span>
            </label>
        </div>
    );
}

export default FilterCheckbox;