import React from 'react';
import {useHistory} from 'react-router-dom';

function PageNotFound() {
    const history = useHistory();
    return (
        <div className="not-found">
            <span className="not-found__title">404</span>
            <p className="not-found__text">
                Страница не найдена
            </p>
            <button className="not-found__button-back" onClick={() => history.goBack()}>Назад</button>
        </div>
    )
}

export default PageNotFound;